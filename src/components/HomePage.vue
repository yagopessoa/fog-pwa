<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm8 md6>
        oi
      </v-flex>
      <v-flex xs12 sm8 md6>
        tchau
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      title: 'Fellowship of The Game',
      description: 'Grupo de extensão vinculado ao ICMC - USP focado em desenvolvimento de jogos e na disseminação do conhecimento, através de cursos e eventos abertos ao público.',
      logo: '@/assets/brasao.png'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
