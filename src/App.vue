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
      <v-menu offset-y class="hidden-xs-only hidden-sm-only mx-4">
        <v-btn outline color="white" class="black--text" slot="activator">
          <v-icon>expand_more</v-icon>
          <div class="mr-2">Projetos</div>
        </v-btn>

        <v-list>
          <v-list-tile
            v-for="item in dropdownItems"
            :key="item.name"
            :to="item.link"
          >
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
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
          { title: 'Quem somos', link: '/sobre' },
          { title: 'Eventos', link: '/eventos' },
          { title: 'Faça parte', link: '/psel' }
        ],
        dropdownItems: [
          { title: 'Jogos', link: '/jogos' },
          { title: 'Rádio', link: '/radio' },
          { title: 'Geléia', link: '/geleia' },
          { title: 'Disciplina', link: '/disciplina' }
        ]
      }
    },
    name: 'app'
  }
</script>

<style>
</style>
