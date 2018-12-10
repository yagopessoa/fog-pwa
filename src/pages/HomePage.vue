<template>
  <div>
    <div class="upper-session">
      <v-container grid-list-md text-xs-center>
        <v-layout hidden-xs-only row wrap>
          <v-flex xs12 sm8>
            <div class="title-n-subtitle">
              <p class="display-3 font-weight-medium">{{title}}</p>
              <p class="headline text-sm-justify">{{description}}</p>
            </div>
          </v-flex>
          <v-flex xs12 sm4>
            <img src="@/assets/brasao.png" class="brasao" alt="Brasão" />
          </v-flex>
        </v-layout>
        <v-layout hidden-sm-and-up row wrap>
          <v-flex xs12 sm4>
            <img src="@/assets/brasao.png" class="brasao-small" alt="Brasão" />
          </v-flex>
          <v-flex xs12 sm8>
            <div class="title-n-subtitle">
              <p class="display-2">{{title}}</p>
              <p class="subheading text-xs-justify">{{description}}</p>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div class="bottom-session">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      title: 'Fellowship of The Game',
      description: 'Grupo de extensão vinculado ao ICMC - USP focado em desenvolvimento de jogos e na disseminação do conhecimento através de cursos e eventos abertos ao público.',
      logo: '@/assets/brasao.png'
    }
  }
}
</script>

<style>
  .brasao{
    padding: 16px;
  }
  .brasao-small{
    max-width: 75%;
  }
  .title-n-subtitle{
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .upper-session{
    min-height: calc(100vh - 64px);
    display: flex;
    align-items: center;
  }
  .bottom-session{
    height: 600px;
    width: 100%;
    background-color: #F1CD36;
  }
</style>
