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
                <p class="display-2">{{title}}</p>
                <p class="subheading text-xs-justify">{{description}}</p>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </v-parallax>
    <div class="bottom-session" id="bottom">
    </div>
  </div>
</template>

<script>
//  https://culturaalternativa.com.br/wp-content/uploads/2017/11/background-clean.jpg
//  http://sanseverinocomunicacao.com.br/wp-content/uploads/2016/06/clean-white-polygon-backgrounds-7-copy.jpg
export default {
  name: 'HomePage',
  data () {
    return {
      title: 'Fellowship of The Game',
      description: 'Grupo de extensão vinculado ao ICMC - USP focado em desenvolvimento de jogos e na disseminação do conhecimento através de cursos e eventos abertos ao público.'
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
    height: 100vh;
    width: 100%;
    background-color: #F1CD36;
  }
  p{
    color: #000;
  }
  .parallax{
    min-height: calc(100vh - 60px);
    object-fit: cover;
  }

  @media screen and (max-height: 959px) {
    .parallax{
      min-height: calc(100vh - 48px);
    }
  }

  @media screen and (max-height: 639px) {
    .parallax{
      min-height: calc(100vh);
    }
  }
</style>
