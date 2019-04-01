import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/HomePage'
import GamesPage from '@/pages/GamesPage'
import PselPage from '@/pages/PselPage'
import PtdcPage from '@/pages/PtdcPage'
import AboutPage from '@/pages/AboutPage'
import ClassPage from '@/pages/ClassPage'
import EventsPage from '@/pages/EventsPage'
import GeleiaPage from '@/pages/GeleiaPage'
import PuPage from '@/pages/PuPage'

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
    },
    {
      path: '/podcast',
      name: 'PtdcPage',
      component: PtdcPage
    },
    {
      path: '/geleia',
      name: 'GeleiaPage',
      component: GeleiaPage
    },
    {
      path: '/disciplina',
      name: 'ClassPage',
      component: ClassPage
    },
    {
      path: '/eventos',
      name: 'EventsPage',
      component: EventsPage
    },
    {
      path: '/psel',
      name: 'PselPage',
      component: PselPage
    },
    {
      path: '/quemsomos',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/pu',
      name: 'PuPage',
      component: PuPage
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: 'history'
})
