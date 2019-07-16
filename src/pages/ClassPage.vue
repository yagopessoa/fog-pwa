<template>
  <div class="page-scroll">
    <v-parallax class="parallax" src="https://i.ibb.co/pQBj77p/bg2.jpg">
      <div class="upper">
        <v-container class="upper-container" grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 md10 offset-md1>
              <div class="subtitle text-xs-justify ma-2 black--text">

                <img class="pb-3" src="/static/img/class.png" alt="Logo de uma sala de aula" />

                <p class="headline hidden-xs-only mt-4">
                  A disciplina <b>SSC0770 - Introdução ao Desenvolvimento de Jogos Eletrônicos</b> foi criada e é mantida pelo 
                  FoG em parceria com os docentes do ICMC-USP. Trabalhamos em parceria direta para auxiliar na atualização 
                  dos materiais e trabalhos, expandir o ensino de desenvolvimento de jogos na universidade e 
                  outras atividades relacionadas.
                </p>

                <p class="subheading hidden-sm-and-up mt-2 pa-0">
                  A disciplina <b>SSC0770 - Introdução ao Desenvolvimento de Jogos Eletrônicos</b> foi criada e é mantida pelo 
                  FoG em parceria com os docentes do ICMC-USP. Trabalhamos em parceria direta para auxiliar na atualização 
                  dos materiais e trabalhos, expandir o ensino de desenvolvimento de jogos na universidade e 
                  outras atividades relacionadas.
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

            <p class="headline text-xs-center mt-4 pa-2 px-4 pt-4">
              O que é ensinado?
            </p>
            
            <p class="subheading mt-4">
              A disciplina aborda diversas <b>teorias</b> e <b>práticas</b> essenciais para o <b>desenvolvimento</b> de projetos de <b>jogos</b>.
            </p>
            <p class="subheading mt-1">
              <b>Game design</b>, elaboração e manutenção de <b>documentação</b>, conceitos <b>físicos e matemáticos</b> necessário para a elaboração de <b>motores de jogos</b>, 
              aplicação de motores de jogos comerciais para desenvolvimento de um projeto, apresentações de <b>pitch</b>, elaboração de <b>testes com usuários</b>, fechamento de projeto e elaboração de <i><b>post-mortem</b></i>. 
            </p>
            <p class="subheading mt-1">
              Essas etapas <b>essenciais</b> são apresentadas aos alunos e estes podem realizá-las no <b>ambiente seguro</b> da disciplina com 
              um <b>projeto de jogo</b> que é colocado no <b><a href="http://jogosicmc.itch.io" target="_blank">Itch.io</a></b> ao final de cada semestre.
            </p>
            <p class="subheading mt-1 pb-3">
              Os projetos são apresentados ao público durante a Mostra de Jogos, atualmente parte do nosso evento <b><router-link to="/eventos">USP Game Link</router-link></b>.
            </p>
            
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid text-xs-center>
          <p class="caption mt-2">
            Coded with <v-icon style="font-size: 13px;">favorite</v-icon> by <a href="https://www.linkedin.com/in/yagopessoa/">Yago Pessoa</a>. Copyright © 2019 Fellowship of The Game. Icons by <a href="https://www.flaticon.com">FlatIcon</a>.
          </p>
        </v-container>
    </div>

  </div>
</template>

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

  @media screen and (max-width: 959px) {
    .parallax{
      min-height: calc(100vh - 48px);
    }
  }
</style>
