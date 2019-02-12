<template>
  <div>
    <div class="upper-session">
      <v-container grid-list-md text-xs-center>

        <v-layout hidden-xs-only row wrap>
          <v-flex xs12 md7 lg5>
            <img src="@/assets/geleia.png" class="brasao" alt="Brasão" />
          </v-flex>
          <v-flex xs12 md5 lg7>
            <div class="title-n-subtitle">
              <p class="headline text-sm-justify">{{description}}</p>
            </div>
          </v-flex>
        </v-layout>

        <v-layout hidden-sm-and-up row wrap>
          <v-flex xs12 sm4>
            <img src="@/assets/geleia.png" class="brasao-small" alt="Brasão" />
          </v-flex>
          <v-flex xs12 sm8>
            <div class="title-n-subtitle">
              <p class="subheading text-xs-justify">{{description}}</p>
            </div>
          </v-flex>
        </v-layout>

      </v-container>
    </div>

    <div class="bottom">
      <p class="display-1 text-xs-center mt-2">Como funciona?</p>
      <v-layout row wrap>
        <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
          <div class="title-n-subtitle">
            <p class="subheading mb-2 text-xs-center">{{howItWorks1}}</p>
            <p class="subheading mb-2 text-xs-center">{{howItWorks2}}</p>
            <p class="subheading mb-4 text-xs-center">{{howItWorks3}}</p>
          </div>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 sm8 md6 offset-sm2 offset-md3>
          <div class="title-n-subtitle">
            <p class="headline mt-4 mb-4 text-xs-center">
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
    name: 'HomePage',
    data () {
      return {
        description: 'O Geleia é a frente do FoG responsável por organizar Game Jams, que são eventos onde você se reúne em um time para desenvolver um jogo em um tempo limitado com um tema específico. Esses eventos geralmente tem a duração de 48 horas que se decorrem ao longo de um final de semana, mas existem jams de até uma semana ou mais!',
        howItWorks1: 'Uma game jam é um espaço perfeito para testar novas ideias e conceitos, aprender novas técnicas e ferramentas, além de conhecer novas pessoas. Algumas jams até oferecem premiações para os primeiros colocados.',
        howItWorks2: 'Seja por interesse em entrar no mundo dos jogos, por mera curiosidade em descobrir como esse mundo funciona, ou mesmo por querer apenas aprimorar suas habilidades e se divertir, todos são bem vindos a uma Game Jam.',
        howItWorks3: 'Você pode ser um artista, um modelador 3D, um programador, um escritor, um designer, um compositor ou músico, ou mesmo só um curioso que quer aprender. Nós organizamos e participamos de jams como a Global Game Jam, Ludum Dare, Café Game Jam, Game Jam da Semcomp (Semana da computação do ICMC) e diversas outras game jams, organizadas quase que mensalmente durante todo o ano, PARTICIPE! ;)',
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          }
        ]
      }
    }
  }
</script>

<style>
  .upper-session{
    min-height: calc(100vh - 60px);
    display: flex;
    align-items: center;
  }
  .bottom{
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

  @media screen and (max-width: 959px) {
    .title-n-subtitle{
      padding: 16px;
    } 
  }
</style>

