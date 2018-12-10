<template>
  <v-app>
    <v-toolbar fixed dark class="primary">
      <v-toolbar-side-icon 
        @click="sideNav = !sideNav" 
        class="hidden-md-and-up"
      />
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer" >
          Fellowship of The Game
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
    </v-toolbar>
    <v-toolbar />

    <v-navigation-drawer absolute temporary v-model="sideNav" class="hidden-sm-and-up">
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
    </v-navigation-drawer>
    <main>
      <router-view>
      </router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          { title: 'Sobre', link: '/sobre' },
          { title: 'Jogos', link: '/jogos' },
          { title: 'Eventos', link: '/eventos' },
          { title: 'Rádio', link: '/radio' },
          { title: 'Faça parte', link: '/psel' }
        ]
      }
    },
    name: 'app'
  }
</script>

<style>
</style>
