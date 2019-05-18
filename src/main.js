// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import 'vuetify/dist/vuetify.min.css'

import VueCountdown from '@chenfengyuan/vue-countdown'

import VueAnalytics from 'vue-analytics'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { initializeFirebase } from './push-notification'
// initializeFirebase()

library.add(faFacebook)
library.add(faInstagram)
library.add(faLinkedin)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(Vuetify,
  {
    theme: {
      primary: '#354A5F',
      secondary: '#495C6F',
      accent: '#F1CD36',
      error: '#FF5252',
      info: '#1E2264',
      success: '#4CAF50',
      warning: '#FFC107'
    }
  }
)

Vue.component(VueCountdown.name, VueCountdown)

Vue.use(VueAnalytics, {
  id: 'UA-134518065-1',
  router
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
