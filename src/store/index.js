import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numero: 0
  },
  mutations: {
    guardarNumero: function (state, data = {}) {
      state.numero = data.value;
    }
  },
})
