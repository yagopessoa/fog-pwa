<template>
  <div id="start">
    <v-parallax class="parallax" src="https://i.ibb.co/pQBj77p/bg2.jpg">
      <div class="upper-session">
        <v-container grid-list-md text-xs-center>
          <v-layout hidden-xs-only row wrap>
            <v-flex xs12 sm8>
              <div class="title-n-subtitle">
                <p class="display-3 font-weight-medium">{{title}}</p>
                <p class="headline text-sm-justify">{{description}}</p>
              </div>
            </v-flex>
            <v-flex xs12 sm4>
              <img src="@/assets/brasao.png" class="brasao" alt="Brasão" />
            </v-flex>
            <v-flex xs12>
              <v-btn @click="$vuetify.goTo('#bottom')" flat color="accent" class="expand-btn">
                <v-icon large>expand_more</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout hidden-sm-and-up row wrap>
            <v-flex xs12 sm4>
              <img src="@/assets/brasao.png" class="brasao-small" alt="Brasão" />
            </v-flex>
            <v-flex xs12 sm8>
              <div class="title-n-subtitle">
                <p class="display-2 mb-4">{{title}}</p>
                <p class="subheading text-xs-justify">{{description}}</p>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </v-parallax>

    <div class="bottom-session" id="bottom">
      <v-flex xs12 sm8 offset-sm2 md10 offset-md1>
        <v-container fluid text-xs-center>
          <p class="display-1 mt-4">O que fazemos?</p>
        </v-container>
        <v-container grid-list-lg fluid text-xs-center class="pb-5">
          <v-layout row wrap>
            <v-flex v-for="card in cardsContent" :key="card.title" xs12 md4>
              <v-card class="card">
                <img :src="card.iconPath" class="icon" alt="Ícone" />
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline font-weight-medium mb-4 card-title">{{ card.title }}</h3>
                    <p class="subheading grey--text text--darken-3 px-1">{{ card.description }}</p>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    data () {
      return {
        title: 'Fellowship of The Game',
        description: 'Grupo de extensão vinculado ao ICMC - USP focado em desenvolvimento de jogos e na disseminação do conhecimento através de cursos e eventos abertos ao público.',
        cardsContent: [
          {
            title: 'Desenvolvimento de Jogos',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia ante quis aliquam varius. Cras at risus at nulla rhoncus aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            iconPath: '/static/img/gamedev.png'
          },
          {
            title: 'Disseminação de Conhecimento',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia ante quis aliquam varius. Cras at risus at nulla rhoncus aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            iconPath: '/static/img/class.png'
          },
          {
            title: 'Organização de Eventos',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia ante quis aliquam varius. Cras at risus at nulla rhoncus aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            iconPath: '/static/img/events.png'
          }
        ]
      }
    }
  }
</script>

<style>
  .brasao{
    padding: 16px;
  }
  .brasao-small{
    max-width: 75%;
  }
  .title-n-subtitle{
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .upper-session{
    min-height: calc(100vh - 60px);
    display: flex;
    align-items: center;
  }
  .expand-btn{
    margin-top: 48px;
  }
  .bottom-session{
    /* min-height: 100vh; */
    width: 100%;
    background-color: rgba(241,205,54, 0.3);
    /* background-color: rgba(53,74,95, 0.3); */
    padding-top: 60px;
  }
  p{
    color: #000;
  }
  .parallax{
    min-height: calc(100vh - 60px);
    object-fit: cover;
  }
  .card{
    min-height: 450px;
    margin: 0px 16px;
  }
  .card-title{
    padding: 0px 48px;
  }
  .icon{
    padding: 16px;
    margin-top: 24px;
  }

  @media screen and (max-width: 1355px) {
    .card-title{
      padding: 0px 16px;
    } 
  }

  @media screen and (max-width: 1125px) {
    .card-title{
      padding: 0px 0px;
    } 
  }

  @media screen and (max-height: 959px) {
    .parallax{
      min-height: calc(100vh - 48px);
    }
    .bottom-session{
      padding-top: 16px;
    }
  }

  @media screen and (max-height: 639px) {
    .parallax{
      min-height: calc(100vh);
    }
  }
</style>
