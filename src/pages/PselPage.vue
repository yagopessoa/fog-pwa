<template>
  <div style="background-color: #ECEFF1;" class="page-scroll">
    <v-bottom-sheet v-model="sheet">
      <v-card tile>
        <p class="title ma-0 pa-4 ">{{ sheetInfo.title }}</p>
        <p class="subheading ma-0 px-4 pb-2">
          <v-icon left class="black--text">today</v-icon>
          {{ sheetInfo.date }}
        </p>
        <p class="subheading ma-0 px-4 pb-2">
          <v-icon left class="black--text">place</v-icon>
          {{ sheetInfo.local }}
        </p>
        <p class="subheading ma-0 px-4 pb-4">
          <v-icon left class="black--text">person</v-icon>
          Ministrante: {{ sheetInfo.minister }}
        </p>
        <!-- icone pro pre-requisitos: playlist_add_check -->
        <p v-if="sheetInfo.description!==''" class="text-xs-justify ma-0 px-4 pb-4">{{ sheetInfo.description }}</p>
        <div class="ma-0 px-4 pb-4">
          <v-btn 
            :href="sheetInfo.link"
            target="_blank" 
            color="secondary"
            outline
            class="mx-0"
            disabled
          >
            Inscreva-se
            <v-icon small right>open_in_new</v-icon>
          </v-btn>
        </div>
        <p v-if="sheetInfo.link==='#'" class="capition text-xs-justify ma-0 px-4 pb-4">*As inscrições abrirão em breve!</p>
      </v-card>
    </v-bottom-sheet>

    <img src="@/assets/header-psel.png" class="logo hidden-xs-only hidden-sm-only mb-2" alt="Banner Choose Your Character" />
    <img src="@/assets/large-psel.jpg" class="logo hidden-md-and-up" alt="Banner Choose Your Character" />
    
    <div class="page">
      <p class="headline text-xs-center mt-4 pa-2 px-4 pt-4" v-if="!hasClosed">
        Faça parte do grupo você também!
      </p>
      <v-btn 
        href="https://docs.google.com/forms/d/1TQDZCnpCkRvUbOjXPyHoupEJGD_DJUFS5U5P-FMQpBU/"
        target="_blank" 
        color="accent"
        contained
        large
        class="mb-3"
        v-if="!hasClosed"
      >
        <div class="indigo--text text--darken-4">Inscreva-se</div>
        <v-icon right class="indigo--text text--darken-4">open_in_new</v-icon>
      </v-btn>

      <v-container grid-list-md v-else>
        <v-layout row wrap>
          <v-flex xs12 md10 offset-md1>
            <h2 class="headline text-xs-center mt-4 px-4 pt-4 pb-0 mb-1">
              Infelizmente as inscrições para o processo seletivo desse ano já se encerraram!
            </h2>
            <p class="headline text-xs-center mb-4 pa-2">
              Mas siga-nos nas redes sociais para saber quando será o próximo e ficar por dentro de tudo que acontece no FoG:
            </p>
            <v-container grid-list-lg fluid text-xs-center class="pt-0 pb-0 mb-0">
              <v-layout row wrap class="social-row-psel">
                <v-btn 
                  href="https://www.instagram.com/fog_icmc/"
                  target="_blank" 
                  color="indigo darken-4 white--text"
                  large
                  fab
                >
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" size="2x" />
                </v-btn>
                <v-btn 
                  href="https://www.facebook.com/fogicmc"
                  target="_blank" 
                  color="indigo darken-4 white--text"
                  large
                  fab
                >
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" size="2x" />
                </v-btn>
                <v-btn 
                  href="https://www.linkedin.com/company/fellowship-of-the-game"
                  target="_blank" 
                  color="indigo darken-4 white--text"
                  large
                  fab
                >
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" size="2x" />
                </v-btn>
                
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>

      <h2 class="headline text-xs-center mt-4 px-4 pt-4 pb-0 mb-0">
        Áreas de atuação do Fellowship of the Game
      </h2>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 md10 offset-md1>
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
          <v-flex xs12 md10 offset-md1>
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

      <p class="headline text-xs-center mt-4 pa-2 px-4 pt-4" id="datas">
        Datas do Processo Seletivo
      </p>
      <ul>
        <div class="pa-3">
          <li class="subheading text-xs-justify pb-2 mb-0 grey--text" v-for="date in dates" :key="date.text" v-if="new Date() > date.date">
            <p class="grey--text">
              {{ date.text }}
            </p>
          </li>
          <li class="subheading font-weight-medium text-xs-justify pb-2 mb-0" v-for="date in dates" :key="date.text" v-if="new Date() < date.date">
            <p>
              {{ date.text }}
            </p>
          </li>
        </div>
      </ul>

      <p class="headline text-xs-center mt-4 pa-2 px-4 pt-4">
        Datas dos Minicursos
      </p>
      <p class="text-xs-center px-2 py-0">
        Obs. Clique nos minicursos para obter mais informações!
      </p>
      
       <v-container grid-list-md id="minicursos">
        <v-layout row wrap>
          <v-flex xs12>

            <v-timeline class="hidden-xs-only">
              <v-timeline-item
                key="a"
                color="accent"
                large
              >
                <v-card color="accent" dark class="elevation-2">
                  <v-card-title class="title">06/04 (sábado)</v-card-title>
                  <v-card-text class="white text--primary">
                    <ul>
                      <li key="1" class="mb-1">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Arte Vetorial para Iniciantes', '06/04 - 14h00', 'ICMC - Sala 5-003', 'Matheus Bragança', 'Os participantes irão adquirir habilidades básicas em utilização do inkscape para a criação de assets e logos e conhecimento de conceitos de design gráfico.', 'https://uspdigital.usp.br/apolo/inscricaoPublicaFormTurmaListar?codund=55&codcurceu=550400395&codedicurceu=19001&numseqofeedi=1&oriins=W')">
                          Arte Vetorial para Iniciantes</a></u></template>
                      </li>
                      <li key="2" class="mb-1">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Composição de Trilhas Sonoras para Jogos', '06/04 - 14h00', 'ICMC - Sala 4-003', 'Bruno Gazoni', 'Expor técnicas de desenvolvimento musical especialmente aplicados a situações composicionais comuns em trilhas de jogos. Ao fim do curso os participantes terão noções básicas de teoria musical e composição e do manuseio de dois softwares livres de escrita de partitura e produção de áudio.', 'https://uspdigital.usp.br/apolo/inscricaoPublicaFormTurmaListar?codund=55&codcurceu=550400396&codedicurceu=19001&numseqofeedi=1&oriins=W')">
                          Composição de Trilhas Sonoras para Jogos</a></u></template>
                      </li>
                      <li key="3" class="mb-1">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Desenvolvendo um Jogo Shoot\'em Up em Unity', '06/04 - 14h00', 'ICMC - Sala 4-005', 'William Ferreira', 'Ao final do curso, os participantes poderão criar um jogo Shoot \'em up simples em Unity por meio das técnicas e conceitos apresentados.', 'https://uspdigital.usp.br/apolo/inscricaoPublicaFormTurmaListar?codund=55&codcurceu=550400397&codedicurceu=19001&numseqofeedi=1&oriins=W')">
                          Desenvolvendo um Jogo Shoot'em Up em Unity</a></u></template>
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
                <v-card color="indigo darken-4" dark class="elevation-2">
                  <v-card-title class="title">07/04 (domingo)</v-card-title>
                  <v-card-text class="white text--primary">
                    <ul>
                      <li key="1" class="mb-1">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Arte 2D para Iniciantes', '07/04 - 14h00', 'ICMC - Sala 5-001', 'Renata Vinhaga', 'Introduzir ao aluno os conceitos básicos de arte para criação de personagens e ambientação que serão utilizados no desenvolvimento de um jogo.', 'https://uspdigital.usp.br/apolo/inscricaoPublicaFormTurmaListar?codund=55&codcurceu=550400404&codedicurceu=19001&numseqofeedi=1&oriins=W')">
                          Arte 2D para Iniciantes</a></u></template>
                      </li>
                      <li key="2" class="mb-1">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Introdução à Voxel Art', '07/04 - 14h00', 'ICMC - Sala 4-003', 'Leonardo Chieppe', 'Ensinar a importância de um estilo artístico uniforme dentro dos jogos digitais, introduzir o aluno no estilo de voxel art e realizar uma prática de prototipacao de modelos usando o MagicaVoxel.', 'https://uspdigital.usp.br/apolo/inscricaoPublicaFormTurmaListar?codund=55&codcurceu=550400398&codedicurceu=19001&numseqofeedi=1&oriins=W')">
                          Introdução à Voxel Art</a></u></template>
                      </li>
                      <li key="3" class="mb-1">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Introdução ao Desenvolvimento de Jogos em Godot', '07/04 - 14h00', 'ICMC - Sala 4-005', 'Willian Gonzaga Leodegario', 'Introduzir o aluno aos problemas e soluções computacionais no domínio de jogos eletrônicos, com foco na programação e lógica de um jogo utilizando-se dos recursos oferecidos pela ferramenta Godot.', 'https://uspdigital.usp.br/apolo/inscricaoPublicaFormTurmaListar?codund=55&codcurceu=550400401&codedicurceu=19001&numseqofeedi=1&oriins=W')">
                          Introdução ao Desenvolvimento de Jogos em Godot</a></u></template>
                      </li>
                      <li key="4" class="mb-1">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Modelagem 3D para Iniciantes', '07/04 - 14h00', 'ICMC - Sala 5-003', 'Eleazar Fernando', '	Introduzir o aluno aos conceitos, técnicas e ferramentas do desenvolvimento de modelagem 3D para jogos, com foco em uma aplicação prática das ferramentas utilizadas.', 'https://uspdigital.usp.br/apolo/inscricaoPublicaFormTurmaListar?codund=55&codcurceu=550400365&codedicurceu=19002&numseqofeedi=1&oriins=W')">
                          Modelagem 3D para Iniciantes</a></u></template>
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
                <v-card color="accent" dark class="elevation-2">
                  <v-card-title class="title">13/04 (sábado)</v-card-title>
                  <v-card-text class="white text--primary">
                    <ul>
                      <li key="1" class="mb-1">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Composição de Trilhas Sonoras para jogos', '13/04 - 14h00', 'ICMC - Sala 4-003', 'Bruno Gazoni', 'Expor técnicas de desenvolvimento musical especialmente aplicados a situações composicionais comuns em trilhas de jogos. Ao fim do curso os participantes terão noções básicas de teoria musical e composição e do manuseio de dois softwares livres de escrita de partitura e produção de áudio.', 'https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550400396&cod_edicao=19002&numseqofeedi=1')">
                          Composição de Trilhas Sonoras para jogos</a></u></template>
                      </li>
                      <li key="2" class="mb-1">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Desenvolvendo um Jogo de Plataforma em Unity', '13/04 - 14h00', 'ICMC - Sala 4-005', 'Henrique Camilo', 'Introduzir o aluno aos problemas e soluções computacionais no domínio de jogos eletrônicos, com foco na programação do jogo com o auxílio da engine Unity.', 'https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550400403&cod_edicao=19001&numseqofeedi=1')">
                          Desenvolvendo um Jogo de Plataforma em Unity</a></u></template>
                      </li>
                      <li key="3" class="mb-1">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Introdução à Pixel Art', '13/04 - 14h00', 'ICMC - Sala 5-001', 'Guilherme López', 'Ao final do curso os alunos terão conhecimento de técnicas de animação voltadas a Pixel Art para utilizar na criação de sprites.', 'https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550400405&cod_edicao=19001&numseqofeedi=1')">
                          Introdução à Pixel Art</a></u></template>
                      </li>
                      <li key="4" class="mb-1">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Pipeline de Produção para Jogos Digitais', '13/04 - 14h00', 'ICMC - Sala 5-101', 'Leonardo Chieppe', 'Introduzir o aluno aos problemas e soluções computacionais no domínio de jogos jogos eletrônicos, com foco em boas práticas de documentação de projetos.', 'https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550400402&cod_edicao=19001&numseqofeedi=1')">
                          Pipeline de Produção para Jogos Digitais</a></u></template>
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
                <v-card color="indigo darken-4" dark class="elevation-2">
                  <v-card-title class="title">14/04 (domingo)</v-card-title>
                  <v-card-text class="white text--primary">
                    <ul>
                      <li key="1" class="mb-1">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Design e Desenvolvimento de Jogos Analógicos', '14/04 - 14h00', 'ICMC - Sala 4-003', 'Michael Alves - Arcano', 'Introduzir aos participantes os desafios do design e do desenvolvimento de jogos sob uma perspectiva do Game Designer, e elucidar os processos por de trás da criação de um jogo, o trabalho do Game Designer e os métodos utilizados para se criar um jogo.', 'https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550400400&cod_edicao=19001&numseqofeedi=1')">
                          Design e Desenvolvimento de Jogos Analógicos</a></u></template>
                      </li>
                      <li key="2" class="mb-1">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Gestão de Projeto e Pessoa para Jogos Digitais', '14/04 - 14h00', 'ICMC - Sala 5-001', 'Matheus Bragança', 'Os participantes irão adquirir habilidade de perceber problemas que uma equipe de desenvolvimento de jogos irão enfrentar e aprender como mitigar e também irão aprender as funções de um produtor de jogos e um pouco de cada área da gestão de projetos em jogos digitais.', 'https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550400399&cod_edicao=19001&numseqofeedi=1')">
                          Gestão de Projeto e Pessoa para Jogos Digitais</a></u></template>
                      </li>
                      <li key="3" class="mb-1">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Modelagem 3D para Iniciantesjogos', '14/04 - 14h00', 'ICMC - Sala 5-003', 'Giuliano Lourençon', 'Introduzir o aluno aos conceitos, técnicas e ferramentas do desenvolvimento de modelagem 3D para jogos, com foco em uma aplicação prática das ferramentas utilizadas.', 'https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550400365&cod_edicao=19003&numseqofeedi=1')">
                          Modelagem 3D para Iniciantesjogos</a></u></template>
                      </li>
                      <li key="4" class="mb-1">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Unity Intermediário - Propriedades, Scriptable Objects e Eventos!', '14/04 - 14h00', 'ICMC - Sala 4-005', 'Abner Santos', 'Introduzir o aluno aos problemas e soluções computacionais no domínio de jogos eletrônicos, com foco em conceitos intermediários/avançados no uso da ferramenta Unity3D para que o mesmo adquira boas práticas e melhor resolução de problemas comumente encontrados no desenvolvimento de jogos.', 'https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550400410&cod_edicao=19001&numseqofeedi=1')">
                          Unity Intermediário - Propriedades, Scriptable Objects e Eventos!</a></u></template>
                      </li>
                  </ul>
                  </v-card-text>
                </v-card>
              </v-timeline-item>

            </v-timeline>

            <v-timeline
              align-top
              dense
              class="hidden-sm-and-up"
            >
              <v-timeline-item
                color="accent"
                small
              >
                <v-layout pt-3>
                  <v-flex xs3>
                    <strong>06/04 (sábado)</strong>
                  </v-flex>
                  <v-flex>
                    <ul>
                      <li key="1" class="mb-3">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Arte Vetorial para Iniciantes', '06/04 - 14h00', 'ICMC - Sala 5-003', 'Matheus Bragança', 'Os participantes irão adquirir habilidades básicas em utilização do inkscape para a criação de assets e logos e conhecimento de conceitos de design gráfico.', 'https://uspdigital.usp.br/apolo/inscricaoPublicaFormTurmaListar?codund=55&codcurceu=550400395&codedicurceu=19001&numseqofeedi=1&oriins=W')">
                          Arte Vetorial para Iniciantes</a></u></template>
                      </li>
                      <li key="2" class="mb-3">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Composição de Trilhas Sonoras para Jogos', '06/04 - 14h00', 'ICMC - Sala 4-003', 'Bruno Gazoni', 'Expor técnicas de desenvolvimento musical especialmente aplicados a situações composicionais comuns em trilhas de jogos. Ao fim do curso os participantes terão noções básicas de teoria musical e composição e do manuseio de dois softwares livres de escrita de partitura e produção de áudio.', 'https://uspdigital.usp.br/apolo/inscricaoPublicaFormTurmaListar?codund=55&codcurceu=550400396&codedicurceu=19001&numseqofeedi=1&oriins=W')">
                          Composição de Trilhas Sonoras para Jogos</a></u></template>
                      </li>
                      <li key="3" class="mb-1">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Desenvolvendo um Jogo Shoot\'em Up em Unity', '06/04 - 14h00', 'ICMC - Sala 4-005', 'William Ferreira', 'Ao final do curso, os participantes poderão criar um jogo Shoot \'em up simples em Unity por meio das técnicas e conceitos apresentados.', 'https://uspdigital.usp.br/apolo/inscricaoPublicaFormTurmaListar?codund=55&codcurceu=550400397&codedicurceu=19001&numseqofeedi=1&oriins=W')">
                          Desenvolvendo um Jogo Shoot'em Up em Unity</a></u></template>
                      </li>
                    </ul>
                  </v-flex>
                </v-layout>
              </v-timeline-item>

              <v-timeline-item
                color="indigo darken-4"
                small
              >
                <v-layout pt-3>
                  <v-flex xs3>
                    <strong>07/04 (domingo)</strong>
                  </v-flex>
                  <v-flex>
                    <ul>
                      <li key="1" class="mb-3">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Arte 2D para Iniciantes', '07/04 - 14h00', 'ICMC - Sala 5-001', 'Renata Vinhaga', 'Introduzir ao aluno os conceitos básicos de arte para criação de personagens e ambientação que serão utilizados no desenvolvimento de um jogo.', 'https://uspdigital.usp.br/apolo/inscricaoPublicaFormTurmaListar?codund=55&codcurceu=550400404&codedicurceu=19001&numseqofeedi=1&oriins=W')">
                          Arte 2D para Iniciantes</a></u></template>
                      </li>
                      <li key="2" class="mb-3">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Introdução à Voxel Art', '07/04 - 14h00', 'ICMC - Sala 4-003', 'Leonardo Chieppe', 'Ensinar a importância de um estilo artístico uniforme dentro dos jogos digitais, introduzir o aluno no estilo de voxel art e realizar uma prática de prototipacao de modelos usando o MagicaVoxel.', 'https://uspdigital.usp.br/apolo/inscricaoPublicaFormTurmaListar?codund=55&codcurceu=550400398&codedicurceu=19001&numseqofeedi=1&oriins=W')">
                          Introdução à Voxel Art</a></u></template>
                      </li>
                      <li key="3" class="mb-3">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Introdução ao Desenvolvimento de Jogos em Godot', '07/04 - 14h00', 'ICMC - Sala 4-005', 'Willian Gonzaga Leodegario', 'Introduzir o aluno aos problemas e soluções computacionais no domínio de jogos eletrônicos, com foco na programação e lógica de um jogo utilizando-se dos recursos oferecidos pela ferramenta Godot.', 'https://uspdigital.usp.br/apolo/inscricaoPublicaFormTurmaListar?codund=55&codcurceu=550400401&codedicurceu=19001&numseqofeedi=1&oriins=W')">
                          Introdução ao Desenvolvimento de Jogos em Godot</a></u></template>
                      </li>
                      <li key="4" class="mb-1">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Modelagem 3D para Iniciantes', '07/04 - 14h00', 'ICMC - Sala 5-003', 'Eleazar ', '	Introduzir o aluno aos conceitos, técnicas e ferramentas do desenvolvimento de modelagem 3D para jogos, com foco em uma aplicação prática das ferramentas utilizadas.', 'https://uspdigital.usp.br/apolo/inscricaoPublicaFormTurmaListar?codund=55&codcurceu=550400365&codedicurceu=19002&numseqofeedi=1&oriins=W')">
                          Modelagem 3D para Iniciantes</a></u></template>
                      </li>
                    </ul>
                  </v-flex>
                </v-layout>
              </v-timeline-item>

              <v-timeline-item
                color="accent"
                small
              >
                <v-layout pt-3>
                  <v-flex xs3>
                    <strong>13/04 (sábado)</strong>
                  </v-flex>
                  <v-flex>
                    <ul>
                      <li key="1" class="mb-3">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Composição de Trilhas Sonoras para jogos', '13/04 - 14h00', 'ICMC - Sala 4-003', 'Bruno Gazoni', 'Expor técnicas de desenvolvimento musical especialmente aplicados a situações composicionais comuns em trilhas de jogos. Ao fim do curso os participantes terão noções básicas de teoria musical e composição e do manuseio de dois softwares livres de escrita de partitura e produção de áudio.', 'https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550400396&cod_edicao=19002&numseqofeedi=1')">
                          Composição de Trilhas Sonoras para jogos</a></u></template>
                      </li>
                      <li key="2" class="mb-3">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Desenvolvendo um Jogo de Plataforma em Unity', '13/04 - 14h00', 'ICMC - Sala 4-005', 'Henrique Camilo', 'Introduzir o aluno aos problemas e soluções computacionais no domínio de jogos eletrônicos, com foco na programação do jogo com o auxílio da engine Unity.', 'https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550400403&cod_edicao=19001&numseqofeedi=1')">
                          Desenvolvendo um Jogo de Plataforma em Unity</a></u></template>
                      </li>
                      <li key="3" class="mb-3">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Introdução à Pixel Art', '13/04 - 14h00', 'ICMC - Sala 5-001', 'Guilherme López', 'Ao final do curso os alunos terão conhecimento de técnicas de animação voltadas a Pixel Art para utilizar na criação de sprites.', 'https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550400405&cod_edicao=19001&numseqofeedi=1')">
                          Introdução à Pixel Art</a></u></template>
                      </li>
                      <li key="4" class="mb-1">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Pipeline de Produção para Jogos Digitais', '13/04 - 14h00', 'ICMC - Sala 5-101', 'Leonardo Chieppe', 'Introduzir o aluno aos problemas e soluções computacionais no domínio de jogos jogos eletrônicos, com foco em boas práticas de documentação de projetos.', 'https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550400402&cod_edicao=19001&numseqofeedi=1')">
                          Pipeline de Produção para Jogos Digitais</a></u></template>
                      </li>
                    </ul>
                  </v-flex>
                </v-layout>
              </v-timeline-item>

              <v-timeline-item
                color="indigo darken-4"
                small
              >
                <v-layout pt-3>
                  <v-flex xs3>
                    <strong>14/04 (domingo)</strong>
                  </v-flex>
                  <v-flex>
                    <ul>
                      <li key="1" class="mb-3">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Design e Desenvolvimento de Jogos Analógicos', '14/04 - 14h00', 'ICMC - Sala 4-003', 'Michael Alves - Arcano', 'Introduzir aos participantes os desafios do design e do desenvolvimento de jogos sob uma perspectiva do Game Designer, e elucidar os processos por de trás da criação de um jogo, o trabalho do Game Designer e os métodos utilizados para se criar um jogo.', 'https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550400400&cod_edicao=19001&numseqofeedi=1')">
                          Design e Desenvolvimento de Jogos Analógicos</a></u></template>
                      </li>
                      <li key="2" class="mb-3">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Gestão de Projeto e Pessoa para Jogos Digitais', '14/04 - 14h00', 'ICMC - Sala 5-001', 'Matheus Bragança', 'Os participantes irão adquirir habilidade de perceber problemas que uma equipe de desenvolvimento de jogos irão enfrentar e aprender como mitigar e também irão aprender as funções de um produtor de jogos e um pouco de cada área da gestão de projetos em jogos digitais.', 'https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550400399&cod_edicao=19001&numseqofeedi=1')">
                          Gestão de Projeto e Pessoa para Jogos Digitais</a></u></template>
                      </li>
                      <li key="3" class="mb-3">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Modelagem 3D para Iniciantesjogos', '14/04 - 14h00', 'ICMC - Sala 5-003', 'Giuliano Lourençon', 'Introduzir o aluno aos conceitos, técnicas e ferramentas do desenvolvimento de modelagem 3D para jogos, com foco em uma aplicação prática das ferramentas utilizadas.', 'https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550400365&cod_edicao=19003&numseqofeedi=1')">
                          Modelagem 3D para Iniciantesjogos</a></u></template>
                      </li>
                      <li key="4" class="mb-1">
                        <template v-slot:activator><u><a 
                          @click="openSheet('Unity Intermediário - Propriedades, Scriptable Objects e Eventos!', '14/04 - 14h00', 'ICMC - Sala 4-005', 'Abner Santos', 'Introduzir o aluno aos problemas e soluções computacionais no domínio de jogos eletrônicos, com foco em conceitos intermediários/avançados no uso da ferramenta Unity3D para que o mesmo adquira boas práticas e melhor resolução de problemas comumente encontrados no desenvolvimento de jogos.', 'https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550400410&cod_edicao=19001&numseqofeedi=1')">
                          Unity Intermediário - Propriedades, Scriptable Objects e Eventos!</a></u></template>
                      </li>
                    </ul>
                  </v-flex>
                </v-layout>
              </v-timeline-item>
            </v-timeline>
            
          </v-flex>
        </v-layout>
      </v-container>

      <p class="headline text-xs-center mt-4 pa-2 px-4 pt-4" v-if="!hasClosed">
        Gostou? Não perca tempo!
      </p>
      <v-btn 
        href="https://docs.google.com/forms/d/1TQDZCnpCkRvUbOjXPyHoupEJGD_DJUFS5U5P-FMQpBU/"
        target="_blank" 
        color="accent"
        contained
        large
        v-if="!hasClosed"
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
        sheet: false,
        sheetInfo: {
          title: '',
          date: '',
          local: '',
          minister: '',
          description: '',
          link: ''
        },
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
            text: '18/02 – Início das Inscrições para a Primeira Fase',
            date: new Date(2019, 1, 19)
          },
          {
            text: '14/03 – Fechamento do Período de Inscrições',
            date: new Date(2019, 2, 15)
          },
          {
            text: '16/03 – Primeira Fase – Primeiro Dia',
            date: new Date(2019, 2, 17)
          },
          {
            text: '23/03 – Primeira Fase – Segundo Dia',
            date: new Date(2019, 2, 24)
          },
          {
            text: '06/04 – Resultados da Primeira Fase e Início da Segunda Fase',
            date: new Date(2019, 3, 7)
          },
          {
            text: '05/05 – Fim da Segunda Fase',
            date: new Date(2019, 4, 6)
          },
          {
            text: '18/05 – Resultado da Segunda Fase',
            date: new Date(2019, 4, 19)
          },
          {
            text: '01/06 – Início do Período de Treinamento dos Novos Membros',
            date: new Date(2019, 5, 2)
          },
          {
            text: '08/09 – Fim do Período de Treinamento dos Novos Membros',
            date: new Date(2019, 8, 9)
          }
        ]
      }
    },
    computed: {
      hasClosed () {
        return new Date() > new Date(2019, 2, 15)
      }
    },
    methods: {
      openSheet (title, date, local, minister, description, link) {
        this.sheetInfo.title = title
        this.sheetInfo.date = date
        this.sheetInfo.local = local
        this.sheetInfo.minister = minister
        this.sheetInfo.description = description
        this.sheetInfo.link = link
        this.sheet = true
      }
    }
  }
</script>

<style>
html{
  overflow-y: auto;
}
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
.social-row-psel{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
