<template>
  <div class="page-scroll">
    <v-parallax class="parallax" src="https://i.ibb.co/pQBj77p/bg2.jpg">
      <div class="upper">
        <v-container class="upper-container" grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 md10 offset-md1>
              <div class="subtitle text-xs-justify ma-2 black--text">

                <img src="@/assets/gamelink.png" class="gamelink-logo" alt="Logo da USP Game Link" />

                <p class="headline hidden-xs-only mt-4">
                  <u><b>USP Game Link</b></u> é um evento anual organizado pelo <b>FoG</b>, cujo objetivo é unir e fortalecer a <b>comunidade de 
                  desenvolvedores de jogos da região</b>, permitindo um amadurecimento e crescimento da indústria brasileira de jogos, 
                  de modo a atingirmos uma relevância ainda maior no cenário mundial de jogos.
                </p>

                <p class="subheading hidden-sm-and-up mt-2 pa-0">
                  USP Game Link é um evento anual organizado pelo <b>FoG</b>, cujo objetivo é unir e fortalecer a <b>comunidade de 
                  desenvolvedores de jogos da região</b>, permitindo um amadurecimento e crescimento da indústria brasileira de jogos, 
                  de modo a atingirmos uma relevância ainda maior no cenário mundial de jogos.
                </p>

              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </v-parallax>

    <div class="bottom">

      <v-container class="upper-container text-xs-justify" grid-list-md>
        <v-layout row wrap>
          <v-flex class="bottom-container" xs12 md8 offset-md2>

            <div class="hidden-xs-only">
              <p class="headline text-xs-center mt-4 pa-2 px-4 pt-4">
                Um evento, dois dias
              </p>
              
              <p class="subheading mt-2">
                <u><b>O primeiro dia</b></u> do evento conta com a clássica <b>Mostra de Jogos do ICMC</b>, na qual diversos desenvolvedores de jogos brasileiros trazem seus trabalhos para que o público teste e se divirta, podendo também tirar dúvidas e dar sugestões para os próprios criadores do jogo!
              </p>
              <p class="subheading mt-1 pb-3">
                Também contamos com a presença dos projetos da <b><router-link to="/disciplina">Disciplina de Desenvolvimento de Jogos</router-link></b>, oferecida pelo ICMC em colaboração com o FoG.
              </p>

              <p class="subheading mt-2">
                <u><b>O segundo dia</b></u> é cheio de <b>palestras</b> e conversas sobre o desenvolvimento de jogos. Grandes nomes do mercado de jogos brasileiro falam sobre diversos assuntos, contam suas experiências de mercado e muito mais!
              </p>
            </div>

            <div class="hidden-sm-and-up text-xs-justify ma-2 pa-3 black--text">
              <p class="headline text-xs-center mt-2 pa-2">
                Um evento, dois dias
              </p>
              
              <p class="subheading mt-2">
                <u><b>O primeiro dia</b></u> do evento conta com a clássica <b>Mostra de Jogos do ICMC</b>, na qual diversos desenvolvedores de jogos brasileiros trazem seus trabalhos para que o público teste e se divirta, podendo também tirar dúvidas e dar sugestões para os próprios criadores do jogo!
              </p>
              <p class="subheading mt-1 pb-4">
                Também contamos com a presença dos projetos da <b><router-link to="/disciplina">Disciplina de Desenvolvimento de Jogos</router-link></b>, oferecida pelo ICMC em colaboração com o FoG.
              </p>

              <p class="subheading mt-2">
                <u><b>O segundo dia</b></u> é cheio de <b>palestras</b> e conversas sobre o desenvolvimento de jogos. Grandes nomes do mercado de jogos brasileiro falam sobre diversos assuntos, contam suas experiências de mercado e muito mais!
              </p>
            </div>

            <p class="headline text-xs-center mt-4 pa-2 py-4 pt-2">
              Fique ligado na próxima edição!
            </p>

            <p class="subheading text-xs-center">
              <v-icon left class="black--text">today</v-icon>
              9 e 10 de Novembro de 2019
            </p>
            <p class="subheading text-xs-center mb-4 pb-4">
              <v-icon left class="black--text">place</v-icon>
              ICMC - USP - São Carlos
            </p>

            <v-btn 
              href="https://www.facebook.com/events/366436447425350/"
              target="_blank" 
              color="accent"
              contained
              large
            >
              <div class="indigo--text text--darken-4">Página do evento</div>
              <v-icon right class="indigo--text text--darken-4">open_in_new</v-icon>
            </v-btn>

            <p class="headline text-xs-center mt-4 pt-4 mb-0">
              Faltam:
            </p>
            <countdown :time="new Date('November 9, 2019 09:00:00') - Date.now()" class="hidden-xs-only my-2 mb-0 pb-0">
              <template slot-scope="props">
                <div class="timer-container">
                  <div class="time-unit">
                    <p class="display-3 mb-0 font-weight-bold">{{ props.days }}</p>
                    <p class="subheading mb-0">dias</p>
                  </div>
                  <div class="time-unit">
                    <p class="display-3 mb-0 font-weight-bold"><span v-if="props.hours<10">0</span>{{ props.hours }}</p>
                    <p class="subheading mb-0">horas</p>
                  </div>
                  <div class="time-unit">
                    <p class="display-3 mb-0 font-weight-bold"><span v-if="props.minutes<10">0</span>{{ props.minutes }}</p>
                    <p class="subheading mb-0">mins</p>
                  </div>
                  <div class="time-unit">
                    <p class="display-3 mb-0 font-weight-bold"><span v-if="props.seconds<10">0</span>{{ props.seconds }}</p>
                    <p class="subheading mb-0">segs</p>
                  </div>
                </div>
              </template>
            </countdown>
            <countdown :time="new Date('November 9, 2019 09:00:00') - Date.now()" class="hidden-sm-and-up my-2 mb-0 pb-0">
              <template slot-scope="props">
                <div class="timer-container">
                  <div class="time-unit">
                    <p class="title mb-0 font-weight-bold">{{ props.days }}</p>
                    <p class="subheading mb-0">dias</p>
                  </div>
                  <div class="time-unit">
                    <p class="title mb-0 font-weight-bold"><span v-if="props.hours<10">0</span>{{ props.hours }}</p>
                    <p class="subheading mb-0">horas</p>
                  </div>
                  <div class="time-unit">
                    <p class="title mb-0 font-weight-bold"><span v-if="props.minutes<10">0</span>{{ props.minutes }}</p>
                    <p class="subheading mb-0">mins</p>
                  </div>
                  <div class="time-unit">
                    <p class="title mb-0 font-weight-bold"><span v-if="props.seconds<10">0</span>{{ props.seconds }}</p>
                    <p class="subheading mb-0">segs</p>
                  </div>
                </div>
              </template>
            </countdown>

          </v-flex>
        </v-layout>
      </v-container>

      <p class="headline text-xs-center mt-1">Edição 2018:</p>
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

      <p class="subheading text-xs-center mt-4 pa-2">
        Ficou com alguma dúvida? Contate-nos pela página do <b><a href="https://www.facebook.com/fogicmc" target="_blank">Facebook</a></b>!
      </p>

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
    name: 'EventsPage',
    data () {
      return {
        items: [
          {
            src: '/static/img/gamelink/1.jpg'
          },
          {
            src: '/static/img/gamelink/2.jpg'
          },
          {
            src: '/static/img/gamelink/3.jpg'
          },
          {
            src: '/static/img/gamelink/4.jpg'
          },
          {
            src: '/static/img/gamelink/5.jpg'
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
    flex-direction: column;
    align-items: center;
  }
  .upper-container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .gamelink-logo{
    padding-bottom: 16px;
    max-height: 50vh;
  }
  .bottom{
    background-color: rgba(53, 74, 95, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  .bottom-container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .subtitle{
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    align-items: center;
  }
  .parallax{
    min-height: calc(100vh - 60px);
    object-fit: cover;
  }
  .timer-container{
    display: flex;
    justify-content: center;
  }
  .time-unit{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
  }

  @media screen and (max-width: 959px) {
    .parallax{
      min-height: calc(100vh - 48px);
    }
    .gamelink-logo{
      max-height: 30vh;
    }
  }
  @media screen and (max-width: 599px) {
    .time-unit{
      margin: 8px;
    }
  }
</style>
