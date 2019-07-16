<template>
  <v-app id="home">
    <v-toolbar fixed dark class="primary">
      <v-toolbar-side-icon 
        @click="sideNav = !sideNav" 
        class="hidden-md-and-up"
      />
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer" >
          <h1 class="title">Fellowship of The Game</h1>
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-xs-only hidden-sm-only">
        <v-btn 
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-menu offset-y class="hidden-xs-only hidden-sm-only mx-4">
        <v-btn outline color="white" class="black--text" slot="activator">
          <v-icon>expand_more</v-icon>
          <div class="mr-2">Difusão</div>
        </v-btn>

        <v-list>
          <v-list-tile
            v-for="item in dropdownItems"
            :key="item.name"
            :to="item.link"
          >
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile>
          <!-- <v-list-tile 
            key="ptdc"
            href="https://www.fog.icmc.usp.br/podcast"
          >
            <v-list-tile-title>Podcast</v-list-tile-title>
          </v-list-tile> -->
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-toolbar />

    <v-navigation-drawer fixed temporary v-model="sideNav" class="hidden-md-and-up">
      <v-list>
        <v-list-tile 
          v-for="item in menuItems" 
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider />
      <v-list>
        <v-list-tile 
          v-for="item in dropdownItems" 
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>
        <!-- <v-list-tile 
          key="ptdc"
          href="https://www.fog.icmc.usp.br/podcast"
        >
          <v-list-tile-content>
            Podcast
          </v-list-tile-content>
        </v-list-tile> -->
      </v-list>
    </v-navigation-drawer>
    <main>
      <transition name="slide-fade">
        <div class="page-area">
          <router-view></router-view>
        </div>
      </transition>
    </main>
  </v-app>
</template>

<script>
  import { page } from 'vue-analytics'
  // import { getNotificationPermission } from '@/push-notification'

  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          { title: 'Membros', link: '/quemsomos' },
          { title: 'Jogos', link: '/jogos' },
          { title: 'Eventos', link: '/eventos' },
          { title: 'Faça parte', link: '/psel' }
        ],
        dropdownItems: [
          { title: 'Podcast', link: '/podcast' },
          { title: 'Geleia', link: '/geleia' },
          { title: 'Disciplina', link: '/disciplina' }
        ]
      }
    },
    methods: {
      track () {
        page('/')
      }
    },
    mounted () {
      // getNotificationPermission()
    },
    name: 'app'
  }
</script>

<style>
  html {
    overflow-y: hidden !important;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(15px);
    opacity: 0;
  }
  .page-area {
    width: 100%;
    height: calc(100vh - 64px);
  }
  .page-scroll {
    height: 100%;
    overflow-y: auto;
  }
  @media screen and (max-width: 959px) {
    .page-area {
      height: calc(100vh - 56px);
    }
  }
</style>
