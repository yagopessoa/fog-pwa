import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/HomePage'
import GamesPage from '@/pages/GamesPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/jogos',
      name: 'GamesPage',
      component: GamesPage
    }
  ]
})
