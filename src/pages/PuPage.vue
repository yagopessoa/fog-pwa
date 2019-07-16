<template>
    <div class="pu-page page-scroll">
        <p class="hidden-xs-only display-3 pa-4 ma-4"><b>O JOGO</b></p>
        <p class="hidden-sm-and-up display-1 pa-4 ma-4"><b>O JOGO</b></p>

        <p class="display-1 mb-4">Feliz 1º de Abril</p>

        <p class="headline pa-4 mt-4">Bom, já que você perdeu esse, que tal conferir outros jogos?</p>

        <v-btn 
            to='/jogos'
            color="accent"
            contained
            large
            class="mx-0 primary--text"
          >
            Nossos Jogos
            <v-icon right>open_in_new</v-icon>
          </v-btn>
    </div>
</template>

<style>
    .pu-page{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
</style>

