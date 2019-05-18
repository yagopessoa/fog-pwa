// import firebase from 'firebase'

// export const initializeFirebase = () => {
//   firebase.initializeApp({
//     apiKey: 'AIzaSyCkASmK29q_NEKzSSI0bJ3UCuzvCJcP0Oc',
//     authDomain: 'fog-site.firebaseapp.com',
//     databaseURL: 'https://fog-site.firebaseio.com',
//     projectId: 'fog-site',
//     storageBucket: 'fog-site.appspot.com',
//     messagingSenderId: '51116572269'
//   })

//   navigator.serviceWorker
//     .register('/static/firebase-messaging-sw.js')
//     .then((registration) => {
//       firebase.messaging().useServiceWorker(registration)
//     })
// }

// export const getNotificationPermission = async () => {
//   try {
//     const messaging = firebase.messaging()
//     await messaging.requestPermission()
//     const token = await messaging.getToken()
//     console.log('user token:', token)
//     /* ToDo: ver antes se esse token ja existe, se nao existir, salva */
//     firebase.database().ref('userTokens').push({ token: token })
//       .then((data) => {
//         console.log('token saved', data)
//       }).catch(error => {
//         console.log(error)
//       })
//   } catch (error) {
//     console.error(error)
//   }
// }
