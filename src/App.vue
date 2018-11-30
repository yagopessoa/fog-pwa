<template>
  <v-app>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon 
        @click="sideNav = !sideNav" 
        class="hidden-sm-and-up"
      />
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer" >
          Fellowship of The Game
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-xs-only">
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
// links should point to a section and not a route
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        { title: 'Sobre', link: '/sobre' },
        { title: 'Projetos', link: '/projetos' },
        { title: 'Contato', link: '/contato' }
      ]
    }
  },
  name: 'app'
}
</script>

<style>
</style>
