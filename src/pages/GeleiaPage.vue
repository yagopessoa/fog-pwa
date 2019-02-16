<template>
  <div>
    <v-parallax class="parallax" src="https://i.ibb.co/pQBj77p/bg2.jpg">
      <div class="upper">
        <v-container grid-list-md text-xs-center>

          <v-layout hidden-xs-only row wrap>
            <v-flex xs12 md6>
              <img src="@/assets/geleia.png" class="brasao" alt="Logo do Geleia" />
            </v-flex>
            <v-flex xs12 md6>
              <div class="title-n-subtitle">
                <p class="headline text-sm-justify ma-2 black--text">{{description}}</p>
              </div>
            </v-flex>
          </v-layout>

          <v-layout hidden-sm-and-up row wrap>
            <v-flex xs12 sm4>
              <img src="@/assets/geleia.png" class="brasao-small" alt="Logo do Geleia" />
            </v-flex>
            <v-flex xs12 sm8>
              <div class="title-n-subtitle">
                <p class="subheading text-xs-justify black--text mb-4">{{description}}</p>
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
            <p class="subheading mb-2 text-xs-justify">{{howItWorks1}}</p>
            <p class="subheading mb-2 text-xs-justify">{{howItWorks2}}</p>
            <p class="subheading mb-4 text-xs-justify">{{howItWorks3}}</p>
          </div>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
          <div class="title-n-subtitle">
            <p class="subheading mt-3 mb-3 text-xs-justify">
              Gostou? Para saber mais, visite a <b><a href="https://fellowshipofthegame.github.io/receita-de-geleia/" target="_blank">Receita de Geleia</a></b> para dicas de como realizar sua primeira game jam, com fontes, ferramentas e muito mais!
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
    </div>

  </div>
</template>

<script>
  export default {
    name: 'GeleiaPage',
    data () {
      return {
        description: 'O Geleia é a frente do FoG responsável por organizar Game Jams, que são eventos onde você se reúne em um time para desenvolver um jogo em um tempo limitado com um tema específico. Esses eventos geralmente tem a duração de 48 horas que se decorrem ao longo de um final de semana, mas existem jams de até uma semana ou mais!',
        howItWorks1: 'Uma game jam é um espaço perfeito para testar novas ideias e conceitos, aprender novas técnicas e ferramentas, além de conhecer novas pessoas. Algumas jams até oferecem premiações para os primeiros colocados.',
        howItWorks2: 'Seja por interesse em entrar no mundo dos jogos, por mera curiosidade em descobrir como esse mundo funciona, ou mesmo por querer apenas aprimorar suas habilidades e se divertir, todos são bem vindos a uma Game Jam.',
        howItWorks3: 'Você pode ser um artista, um modelador 3D, um programador, um escritor, um designer, um compositor ou músico, ou mesmo só um curioso que quer aprender. Nós organizamos e participamos de jams como a Global Game Jam, Ludum Dare, Café Game Jam, Game Jam da Semcomp (Semana da computação do ICMC) e diversas outras game jams, organizadas quase que mensalmente durante todo o ano, PARTICIPE! ;)',
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
      min-height: calc(100vh - 48px);
    }
  }
  @media screen and (max-height: 639px) {
    .parallax{
      min-height: calc(100vh);
    }
  }
</style>
