<template>
  <div style="background-color: #ECEFF1;">

    <img src="@/assets/header-psel.png" class="logo hidden-xs-only hidden-sm-only mb-2" alt="Banner Choose Your Character" />
    <img src="@/assets/large-psel.jpg" class="logo hidden-md-and-up" alt="Banner Choose Your Character" />
    
    <div class="page">
      <p class="headline text-xs-center mt-4 pa-2 px-4 pt-4">
        Faça parte do grupo você também!
      </p>
      <v-btn 
        href="https://docs.google.com/forms/d/1TQDZCnpCkRvUbOjXPyHoupEJGD_DJUFS5U5P-FMQpBU/"
        target="_blank" 
        color="accent"
        contained
        large
        class="mb-3"
      >
        <div class="indigo--text text--darken-4">Inscreva-se</div>
        <v-icon right class="indigo--text text--darken-4">open_in_new</v-icon>
      </v-btn>

      <h2 class="headline text-xs-center mt-4 px-4 pt-4 pb-0 mb-0">
        Áreas de atuação do Fellowship of the Game
      </h2>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12>
            <p class="subheading text-xs-justify mb-4 pa-2">
              Dentro do FoG, um membro é capaz de exercer diversas funções em qualquer uma das áreas atualmente disponíveis. Não importa a área em que trabalha ou a área que estude, no FoG você poderá transitar entre frentes, participar de projetos, aprender e ensinar. Também ressaltamos que estimulamos muito a proatividade na criação de novas frentes de atuação para o grupo. Somos pessoas abertas a novidades! 
            </p>
            <v-card v-for="area in areas" :key="area.title" class="mb-3">
              <v-card-title primary-title>
                <div class="area-card">
                  <img :src="'/static/img/areas/box-' + area.img + '.png'" alt="Imagem da Área de Atuação" class="area-img" />
                  <div>
                    <h3 class="headline mb-0">{{ area.title }}</h3>
                    <div class="subheading text-xs-justify">{{ area.description }}</div>
                  </div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

      <p class="headline text-xs-center mt-4 pa-2 px-4 pt-4">
        Etapas do Processo Seletivo
      </p>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12>
            <p class="subheading text-xs-justify mb-3 pa-2">
              <u><b>Primeira Fase:</b></u> A Primeira Fase do PSel consiste em uma dinâmica a ser dividida em dois dias distintos de acordo com a disponibilidade do candidato. Você poderá participar no dia 16 ou 23 de março.
            </p>

            <p class="subheading text-xs-justify pa-2 mb-0">
              <u><b>Segunda Fase:</b></u> Na Segunda Fase do PSel, o candidato terá um mês para desenvolver um projeto em uma área de sua escolha. Poderá criar um projeto de Gestão Geral, Gestão de Recursos Humanos, Programação, Jogo de Cartas ou Jogo de Tabuleiro, Música, Arte, Dublagem e Fotografia / Vídeo (Mídia).
            </p>
            <p class="subheading text-xs-justify pa-2 mb-0">
              Durante este período, serão oferecidos inúmeros cursos que encobrem grande parte das áreas do Fellowship of the Game. Todos os cursos terão duração de 4 horas, das 14 às 18h do dia e recomendamos fortemente que participe daqueles que te interessarem mais. Valorizamos muito a proatividade e a curiosidade em aprender novas áreas.
            </p>
            <p class="subheading text-xs-justify mb-4 pa-2 mb-0">
              Ainda no período da Segunda Fase, disponibilizaremos um grupo no WhatsApp com membros do FoG dispostos a auxiliar sanando tanto as dúvidas quanto ao PSel quanto as dúvidas relativas ao projeto sendo desenvolvido pelo candidato. Um link de acesso ao grupo será enviado por email a todos os que passarem na Primeira Fase.
            </p>
            
          </v-flex>
        </v-layout>
      </v-container>

      <p class="headline text-xs-center mt-4 pa-2 px-4 pt-4">
        Datas do Processo Seletivo
      </p>
      <ul>
        <div class="pa-3">
          <li class="subheading text-xs-justify pb-2 mb-0" v-for="date in dates" :key="date.text">
            <p>
              {{ date.text }}
            </p>
          </li>
        </div>
      </ul>

      <p class="headline text-xs-center mt-4 pa-2 px-4 pt-4">
        Datas dos Minicursos
      </p>
      
       <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12>
            <v-timeline>
              <v-timeline-item
                key="a"
                color="accent"
                large
              >
                <v-card class="elevation-2">
                  <v-card-title class="headline">06/04 (sábado)</v-card-title>
                  <v-card-text>
                    <ul>
                      <li key="1">
                        Arte Vetorial para Iniciantes (sala 5-003)
                      </li>
                      <li key="2">
                        Composição de Trilhas Sonoras para Jogos v1 (sala 4-003)
                      </li>
                      <li key="3">
                        Desenvolvendo um Jogo Shoot'em Up em Unity (sala 4-005)
                      </li>
                  </ul>
                  </v-card-text>
                </v-card>
              </v-timeline-item>

              <v-timeline-item
                key="b"
                color="indigo darken-4"
                large
              >
                <v-card class="elevation-2">
                  <v-card-title class="headline">07/04 (domingo)</v-card-title>
                  <v-card-text>
                    <ul>
                      <li key="1">
                        Arte 2D para Iniciantes (sala 5-001)
                      </li>
                      <li key="2">
                        Introdução à Voxel Art (sala 4-003)
                      </li>
                      <li key="3">
                        Introdução ao Desenvolvimento de Jogos em Godot (sala 4-005)
                      </li>
                      <li key="4">
                        Modelagem 3D para Iniciantes V1 (sala 5-003)
                      </li>
                  </ul>
                  </v-card-text>
                </v-card>
              </v-timeline-item>

              <v-timeline-item
                key="c"
                color="accent"
                large
              >
                <v-card class="elevation-2">
                  <v-card-title class="headline">13/04 (sábado)</v-card-title>
                  <v-card-text>
                    <ul>
                      <li key="1">
                        Composição de Trilhas Sonoras para Jogos v2 (sala 4-003)
                      </li>
                      <li key="2">
                        Desenvolvendo um Jogo de Plataforma em Unity (sala 4-005)
                      </li>
                      <li key="3">
                        Introdução à Pixel Art (sala 5-001)
                      </li>
                      <li key="4">
                        Pipeline de Produção para Jogos Digitais (sala 5-101)
                      </li>
                  </ul>
                  </v-card-text>
                </v-card>
              </v-timeline-item>

              <v-timeline-item
                key="d"
                color="indigo darken-4"
                large
              >
                <v-card class="elevation-2">
                  <v-card-title class="headline">14/04 (domingo)</v-card-title>
                  <v-card-text>
                    <ul>
                      <li key="1">
                        Design e Desenvolvimento de Jogos Analógicos (sala 4-003)
                      </li>
                      <li key="2">
                        Gestão de Projeto e Pessoa para Jogos Digitais (sala 5-001)
                      </li>
                      <li key="3">
                        Modelagem 3D para Iniciantes V2 (sala 5-003)
                      </li>
                      <li key="4">
                        Unity Intermediário - Propriedades, Scriptable Objects e Eventos! (sala 4-005)
                      </li>
                  </ul>
                  </v-card-text>
                </v-card>
              </v-timeline-item>

            </v-timeline>
          </v-flex>
        </v-layout>
      </v-container>

      <p class="headline text-xs-center mt-4 pa-2 px-4 pt-4">
        Gostou? Não perca tempo!
      </p>
      <v-btn 
        href="https://docs.google.com/forms/d/1TQDZCnpCkRvUbOjXPyHoupEJGD_DJUFS5U5P-FMQpBU/"
        target="_blank" 
        color="accent"
        contained
        large
      >
        <div class="indigo--text text--darken-4">Inscreva-se</div>
        <v-icon right class="indigo--text text--darken-4">open_in_new</v-icon>
      </v-btn>

      <p class="subheading text-xs-center mt-4 mb-4 pa-4">
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
    name: 'GeleiaPage',
    data () {
      return {
        areas: [
          {
            title: 'Coordenação',
            description: 'A equipe de coordenação é formada por membros experientes do grupo, eleitos em votação, que são responsáveis por manter todas as engrenagens funcionando. Essa área é subdividida em outras 4: Coordenador Geral, Relações Humanas (RH), Desenvolvimento e Relações Públicas (RP).',
            img: 'lead'
          },
          {
            title: 'Programação',
            description: 'Membros dessa área são os programadores de jogos, realizam a parte de codificação e de utilização das game engines, tais como Unity e RPG Maker.',
            img: 'code'
          },
          {
            title: 'Game Design',
            description: 'Uma parte muito pensativa e que demanda técnica e visão ampla do jogo. O Game Designer cuida de tornar o jogo o mais legal possível, pensando nos formatos das fases, das mecânicas e do fluxo do jogo.',
            img: 'design'
          },
          {
            title: 'Relações Públicas',
            description: 'O FoG é mais do que só fazer jogo! As áreas de Relações Públicas são responsáveis pela parte de extensão do grupo, todo o contato com a comunidade é feito através de sua equipe. São eles quem cuidam da imprensa, site, eventos e também da organização dos minicursos oferecidos pelo grupo.',
            img: 'rp'
          },
          {
            title: 'Relações Humanas',
            description: 'Os membros inseridos nesta área são os responsáveis por manter a boa convivência entre os demais membros, gerenciar os recursos necessários para a capacitação interna do grupo, criar eventos de integração e participar ativamente do desenvolvimento do Processo Seletivo. As entrevistas realizadas no PSel com os candidatos só podem ser feitas por membros do RH.',
            img: 'rh'
          },
          {
            title: 'Mídia',
            description: 'Tirar boas fotos, produzir vídeos interessantes que capturem a atenção de quem assiste e gerenciar redes sociais também é de extrema importância para qualquer grupo de extensão, que tem como um de seus objetivos alcançar a comunidade. ',
            img: 'rp'
          },
          {
            title: 'Pesquisa',
            description: 'Para além de ser um grupo que apenas desenvolve jogos, o FoG também atua nos diversos graus de pesquisa. Iniciação científica e pesquisas de mestrado e doutorado já são realidade com diversos dos membros. O FoG incentiva fortemente a pesquisa.',
            img: 'design'
          },
          {
            title: 'Música',
            description: 'Músicas e efeitos sonoros criam uma grande ambientação no jogo, diversos membros são exclusivamente dedicados à essa área.',
            img: 'sound'
          },
          {
            title: 'Dublagem',
            description: 'Na criação de jogos, é importante ser capaz de dar vida aos personagens criados através da manipulação e entonação da voz. ',
            img: 'sound'
          },
          {
            title: 'Gestão',
            description: 'Todo projeto, seja de jogo ou de extensão necessita de um líder. Seguindo a metodologia ágil scrum ~adaptada~ o FoG conta com membros experientes que atuam na gestão dos projetos, como líderes de projetos e product owners (PO).',
            img: 'rh'
          },
          {
            title: 'Arte',
            description: 'Arte, desenho, modelagem 3D e animações são só umas das coisas que um artista faz. A identidade visual do jogo é fundamental para criar uma ambientação que atrai e que deixa o jogo atraente.',
            img: 'art'
          }
        ],
        dates: [
          {
            text: '18/02 – Início das Inscrições para a Primeira Fase'
          },
          {
            text: '14/03 – Fechamento do Período de Inscrições'
          },
          {
            text: '16/03 – Primeira Fase – Primeiro Dia'
          },
          {
            text: '23/03 – Primeira Fase – Segundo Dia'
          },
          {
            text: '06/04 – Resultados da Primeira Fase e Início da Segunda Fase'
          },
          {
            text: '05/05 – Fim da Segunda Fase'
          },
          {
            text: '18/05 – Resultado da Segunda Fase'
          },
          {
            text: '01/06 – Início do Período de Treinamento dos Novos Membros'
          },
          {
            text: '08/09 – Fim do Período de Treinamento dos Novos Membros'
          }
        ]
      }
    }
  }
</script>

<style>
.logo{
  width: 100%;
}
.page{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.area-img{
  width: 120px;
  padding-right: 16px;
}
.area-card{
  display: flex;
  align-items: center;
}
</style>
