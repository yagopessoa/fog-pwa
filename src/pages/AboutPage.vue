<template>
  <v-layout class="about-page page-scroll">
    <v-flex xs12 sm10 offset-sm1>
      <p class="display-1 text-xs-center mt-4 pt-3">Conheça nossos membros:</p>
        <v-container grid-list-lg fluid>
          <v-layout row wrap>
            <v-flex v-for="item in itens" :key="item.name" grow>
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
                      <div>
                        <h2 class="headline mb-0">{{item.name}}</h2>
                        <div class="areas-line my-2 pl-1">
                          <v-tooltip bottom>
                            <img v-if="item.areas.coord" src="/static/img/areas/box-lead.png" alt="Ícone da Coordenação" class="area-icon" slot="activator" />
                            <span>Coordenação</span>
                          </v-tooltip>
                          <v-tooltip bottom>
                            <img v-if="item.areas.rh" src="/static/img/areas/box-rh.png" alt="Ícone de Relações Humanas" class="area-icon" slot="activator" />
                            <span>Relações Humanas</span>
                          </v-tooltip>
                          <v-tooltip bottom>
                            <img v-if="item.areas.rp" src="/static/img/areas/box-rp.png" alt="Ícone de Relações Públicas" class="area-icon" slot="activator" />
                            <span>Relações Públicas</span>
                          </v-tooltip>
                          <v-tooltip bottom>
                            <img v-if="item.areas.lead" src="/static/img/areas/box-rh.png" alt="Ícone de Gestão" class="area-icon" slot="activator" />
                            <span>Gestão</span>
                          </v-tooltip>
                          <v-tooltip bottom>
                            <img v-if="item.areas.design" src="/static/img/areas/box-design.png" alt="Ícone de Game Design" class="area-icon" slot="activator" />
                            <span>Game Design</span>
                          </v-tooltip>
                          <v-tooltip bottom>
                            <img v-if="item.areas.dev" src="/static/img/areas/box-code.png" alt="Ícone de Programador" class="area-icon" slot="activator" />
                            <span>Dev</span>
                          </v-tooltip>
                          <v-tooltip bottom>
                            <img v-if="item.areas.sound" src="/static/img/areas/box-sound.png" alt="Ícone de Sons" class="area-icon" slot="activator" />
                            <span>Som</span>
                          </v-tooltip>
                          <v-tooltip bottom>
                            <img v-if="item.areas.art" src="/static/img/areas/box-art.png" alt="Ícone de Arte" class="area-icon" slot="activator" />
                            <span>Arte</span>
                          </v-tooltip>
                          <v-tooltip bottom>
                            <img v-if="item.areas.research" src="/static/img/areas/box-research.png" alt="Ícone de Pesquisa" class="area-icon" slot="activator" />
                            <span>Pesquisa</span>
                          </v-tooltip>
                          <v-tooltip bottom>
                            <img 
                              v-if="!item.areas.research && !item.areas.coord && !item.areas.rh && !item.areas.rp && !item.areas.lead && !item.areas.design && !item.areas.dev && !item.areas.sound && !item.areas.art"
                              src="/static/img/areas/box-none.png"
                              alt="Ícone de nenhuma área"
                              class="area-icon"
                              slot="activator"
                            />
                            <span>Indefinido</span>
                          </v-tooltip>
                        </div>
                      </div>
                    </v-card-title>
                </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container fluid text-xs-center>
          <p class="caption mt-2">
            Coded with <v-icon style="font-size: 13px;">favorite</v-icon> by <a href="https://www.linkedin.com/in/yagopessoa/">Yago Pessoa</a>. Copyright © 2019 Fellowship of The Game. Icons by <a href="https://www.flaticon.com">FlatIcon</a>.
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
  html{
    overflow-y: auto;
  }
  .about-page{
    background-color: #ECEFF1;
  }
  .img{
    min-width: 288px;
    min-height: 288px;
  }
  .areas-line{
    display: flex;
    align-items: center;
  }
  .area-icon{
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }

  @media screen and (max-width: 359px) {
    .area-icon{
      margin-right: 4px;
    }
  }
</style>
