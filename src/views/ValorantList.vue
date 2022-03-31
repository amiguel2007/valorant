<template>
  <div id="app">
    <Header @nombreDelEventoGenerado="funcionQueCapturaEvento"/>
    <img alt="Vue logo" src="../assets/logo.png">
    <Valorant v-for="i in numeroAMostrar" :key="i" /> 
  </div>
</template>

<script>
import Valorant from '../components/Valorant.vue'
import Header from '../components/Header.vue'

export default {
  name: 'App',
  components: {
    Valorant,
    Header
  }, 
  props: {
    numero: Number
  },
    computed:{
        numeroAMostrar(){
            return this.$store.state.numero
        }
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
