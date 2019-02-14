<template>
  <div style="background-color: #ECEFF1;">
    <img src="@/assets/header-psel.png" class="logo hidden-xs-only hidden-sm-only" alt="Banner Choose Your Character" />
    <img src="@/assets/large-psel.jpg" class="logo hidden-md-and-up" alt="Banner Choose Your Character" />
    <div class="page">
      <p class="headline text-xs-center mt-4 pa-2 px-4 pt-4">
        Áreas de atuação do Fellowship of the Game
      </p>
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
            description: 'O FoG é mais do que só fazer jogo! A área de Relações Públicas é responsável pela parte de extensão do grupo. Ela é dividida em diversas frentes muito legais que ganharam até uma página exclusiva, confira aqui! As área de RP também programa diversos minicursos de muitas áreas, confira aqui.',
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
