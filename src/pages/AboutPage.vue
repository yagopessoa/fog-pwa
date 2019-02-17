<template>
  <v-layout class="page">
    <v-flex xs12 sm10 offset-sm1>
      <p class="display-1 text-xs-center mt-4 pt-3">Conheça nossos membros:</p>
        <v-container grid-list-lg fluid>
          <v-layout row wrap>
            <v-flex v-for="item in itens" :key="item.name">
                <v-card tile>
                    <v-img
                        v-if="item.img"
                        :src="'/static/img/members/'+item.img"
                        height="300px"
                        class="img"
                        alt="Foto do membro"
                    >
                      <v-layout
                        slot="placeholder"
                        fill-height
                        align-center
                        justify-center
                        ma-0
                      >
                        <v-progress-circular indeterminate color="primary"></v-progress-circular>
                      </v-layout>
                    </v-img>
                    <v-img
                        v-else
                        src="/static/img/members/default.png"
                        height="300px"
                        class="img"
                        alt="Imagem padrão para membro sem foto"
                    >
                      <v-layout
                        slot="placeholder"
                        fill-height
                        align-center
                        justify-center
                        ma-0
                      >
                        <v-progress-circular indeterminate color="primary"></v-progress-circular>
                      </v-layout>
                    </v-img>

                    <v-card-title primary-title>
                        <h2 class="headline mb-0">{{item.name}}</h2>
                    </v-card-title>
                </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container fluid text-xs-center>
          <p class="caption mt-2">
            Site desenvolvido por <a href="https://www.linkedin.com/in/yagopessoa/">Yago Pessoa</a>. Copyright © 2019 Fellowship of The Game. Ícones por <a href="https://www.flaticon.com">FlatIcon</a>.
          </p>
        </v-container>
    </v-flex>
  </v-layout>
</template>

<script>

import members from '@/members.js'

export default {
  data () {
    return {
      itens: members
    }
  },
  name: 'AboutPage'
}
</script>

<style>
  .page{
    background-color: #ECEFF1;
  }
  .img{
    min-width: 288px;
  }
</style>
