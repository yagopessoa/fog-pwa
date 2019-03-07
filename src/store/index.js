import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: () => ({
    user: null,
    loading: false,
    error: null
  }),
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            console.log('Cadastrou:', user.user)
            const newUser = {
              id: user.user.uid,
              email: user.user.email,
              name: payload.name
            }
            firebase.database().ref('users/' + newUser.id).set({
              name: newUser.name
            }).then(function () {
              commit('setUser', newUser)
              commit('setLoading', false)
            }).catch(error => {
              console.log(error)
              commit('setLoading', false)
              /* commit('setError', error) */
            })
          }
        ).catch(error => {
          console.log(error)
          commit('setLoading', false)
          /* commit('setError', error) */
        })
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            firebase.database().ref('users/' + user.user.uid).once('value')
              .then(snapshot => {
                const data = snapshot.val()
                const newUser = {
                  id: user.user.uid,
                  email: user.user.email,
                  name: data.name
                }
                console.log('User:', newUser)
                commit('setUser', newUser)
                commit('setLoading', false)
              })
              .catch(error => {
                console.log(error)
                commit('setLoading', false)
                commit('setError', error)
              })
          }
        ).catch(error => {
          console.log(error)
          commit('setLoading', false)
          commit('setError', error)
        })
    },
    autoSignin ({commit}, payload) {
      commit('setUser', payload)
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
      router.push('/')
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
