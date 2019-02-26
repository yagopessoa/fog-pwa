importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js')

firebase.initializeApp({
  apiKey: 'AIzaSyCkASmK29q_NEKzSSI0bJ3UCuzvCJcP0Oc',
    authDomain: 'fog-site.firebaseapp.com',
    databaseURL: 'https://fog-site.firebaseio.com',
    projectId: 'fog-site',
    storageBucket: 'fog-site.appspot.com',
    messagingSenderId: '51116572269'
})

const messaging = firebase.messaging()
