<template>
  <div>
    <h3>{{ titulo }}</h3>
    <label for="">Ancho</label>
    <input type="range" name="" id="" min="50" max="960" v-model="ancho" /><br>
    <img :src="ruta" alt="" :width="ancho" />
    <br />
    <label for="tituloImagen" >Escribe titulo para la foto: </label>
    <input type="text" name="tituloImagen" v-model="titulo"/>
  </div>
</template>

<script>
export default {
  name: "Valorant",
  props: {
    mensaje: String,
    ancho: Number,
    titulo: String
  },
  data: function (){
      return {
        nombre: "img",
        ruta: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt39cb66a45c3e9721/615f8adab4dc5405a577a6ed/Raze_v2.png",
      }
  }
};
</script>