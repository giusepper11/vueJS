import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import carrinho from "./modules/carrinho";
import parametros from "./modules/parametros";
import * as getters from './getters'

export default new Vuex.Store({
    state: {
        nome: 'Maria',
        sobrenome: 'Silva'
    },
    getters,
    modules: {carrinho, parametros}
})