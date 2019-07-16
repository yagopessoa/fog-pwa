<template>
  <div class="page-scroll">
    <v-parallax class="parallax" src="https://i.ibb.co/pQBj77p/bg2.jpg">
      <div class="upper">
        <v-container grid-list-md text-xs-center>

          <v-layout hidden-xs-only row wrap>
            <v-flex xs12 md6>
              <img src="@/assets/geleia.png" class="brasao" alt="Logo do Geleia" />
            </v-flex>
            <v-flex xs12 md6>
              <div class="title-n-subtitle">
                <p class="headline text-sm-justify ma-2 black--text">
                  O <b>Geleia</b> é a frente do <b>FoG</b> responsável por organizar <b>Game Jams</b>, que são eventos onde você 
                  se reúne em um time para <b>desenvolver um jogo</b> em um <b>tempo limitado</b> com um <b>tema específico</b>. 
                  Esses eventos geralmente tem a duração de 48 horas que se decorrem ao longo de um final 
                  de semana, mas existem jams de até uma semana ou mais!
                </p>
              </div>
            </v-flex>
          </v-layout>

          <v-layout hidden-sm-and-up row wrap>
            <v-flex xs12 sm4>
              <img src="@/assets/geleia.png" class="brasao-small" alt="Logo do Geleia" />
            </v-flex>
            <v-flex xs12 sm8>
              <div class="title-n-subtitle">
                <p class="subheading text-xs-justify black--text mb-4">
                  O <b>Geleia</b> é a frente do <b>FoG</b> responsável por organizar <b>Game Jams</b>, que são eventos onde você 
                  se reúne em um time para <b>desenvolver um jogo</b> em um <b>tempo limitado</b> com um <b>tema específico</b>. 
                  Esses eventos geralmente tem a duração de 48 horas que se decorrem ao longo de um final 
                  de semana, mas existem jams de até uma semana ou mais!
                </p>
              </div>
            </v-flex>
          </v-layout>

        </v-container>
      </div>
    </v-parallax>

    <div class="bottom">
      <p class="display-1 text-xs-center mt-4 pt-3">Como funciona?</p>
      <v-layout row wrap>
        <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
          <div class="title-n-subtitle">
            <p class="subheading mb-2 text-xs-justify">
              Uma <b>game jam</b> é o espaço perfeito para testar novas <b>ideias e conceitos</b>, aprender novas <b>técnicas 
              e ferramentas</b>, além de conhecer novas <b>pessoas</b>. Algumas jams até oferecem <b>premiações</b> para os 
              primeiros colocados.
            </p>
            <p class="subheading mb-2 text-xs-justify">
              Seja por interesse em entrar no <b>mundo dos jogos</b>, por mera curiosidade em descobrir como esse 
              mundo funciona, ou mesmo por querer apenas aprimorar suas habilidades e se divertir, <b>todos 
              são bem vindos</b> a uma Game Jam.
            </p>
            <p class="subheading mb-4 text-xs-justify">
              Você pode ser um artista, um modelador 3D, um programador, um escritor, um designer, 
              um compositor ou músico, ou mesmo só um curioso que quer aprender. Nós organizamos e 
              participamos de jams como a <b>Global Game Jam, Ludum Dare, Café Game Jam, 
              Game Jam da Semcomp</b> (Semana da computação do ICMC) e diversas outras, organizadas quase 
              que mensalmente durante todo o ano. Aliás, todas elas são <b>abertas ao público</b> ;)
            </p>
          </div>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
          <div class="title-n-subtitle">
            <p class="subheading mt-3 mb-3 text-xs-justify">
              Gostou? Para saber mais, visite a <b><a href="https://fellowshipofthegame.github.io/receita-de-geleia/" target="_blank">Receita de Geleia</a></b> 
              para <b>dicas</b> de como realizar sua primeira game jam, com <b>fontes</b>, <b>ferramentas</b> e muito mais!
            </p>
          </div>
        </v-flex>
      </v-layout>

      <p class="display-1 text-xs-center mt-4">Global Game Jam 2019:</p>
      <v-layout row wrap>
        <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
          <v-carousel class="mb-4">
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>

      <v-container fluid text-xs-center>
        <p class="caption mt-2">
          Coded with <v-icon style="font-size: 13px;">favorite</v-icon> by <a href="https://www.linkedin.com/in/yagopessoa/">Yago Pessoa</a>. Copyright © 2019 Fellowship of The Game. Icons by <a href="https://www.flaticon.com">FlatIcon</a>.
        </p>
      </v-container>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'GeleiaPage',
    data () {
      return {
        items: [
          {
            src: '/static/img/ggj_1.jpg'
          },
          {
            src: '/static/img/ggj_2.jpg'
          },
          {
            src: '/static/img/ggj_3.jpg'
          }
        ]
      }
    }
  }
</script>

<style>
  html{
    overflow-y: auto;
  }
  .upper{
    min-height: calc(100vh - 60px);
    display: flex;
    align-items: center;
  }
  .bottom{
    background-color: rgba(53, 74, 95, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  .title-n-subtitle{
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .brasao{
    padding: 16px;
    max-height: 80vh;
  }
  .brasao-small{
    max-width: 75%;
  }
  .parallax{
    min-height: calc(100vh - 60px);
    object-fit: cover;
  }

  @media screen and (max-width: 959px) {
    .title-n-subtitle{
      padding: 16px;
    }
    .parallax{
      min-height: calc(120vh);
    }
  }
</style>
