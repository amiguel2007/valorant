<template>
  <div>
    <header>
      <h3>Generador de tarjetas Valorant</h3>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/2560px-Valorant_logo_-_pink_color_version.svg.png"
        alt=""
        width="90"
      />
      <label for="numcard">Escribe el número de tarjetas: </label>
      <input
        type="text"
        name="numcard"
        v-model="numero"
        @keyup="funcionModificaState"
      />
    </header>
  </div>
</template>

<script>
export default {
  name: "Valorant",
  props: {
    ancho: Number,
    titulo: String,
    numero: Number,
  },
  methods: {
    funcionModificaState (){
             this.$store.commit('guardarNumero', {
                value: parseInt(this.numero) 
            })
        },
  },
};
</script>


<style>
header {
  background-color: bisque;
  text-align: left;
}
</style>