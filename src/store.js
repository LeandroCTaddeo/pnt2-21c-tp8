import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)
Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        url: "https://635a938f38725a1746ca7a08.mockapi.io/usuarios",
        personas: [],
    },
    actions : {
        getPersonas({commit}){
            commit('getPersonas')
        },
        postPersona({commit}, persona){
            commit('postPersona', persona)
        },
    },
    mutations : {
        async getPersonas(state) {
            try {
              let respuesta = await axios(state.url)
              state.personas = respuesta.data
            } catch (error) { console.error('Error en getPersonas', error.message) }
        },
        async postPersona(state, persona) {
            try {
                await axios.post(state.url, persona, { 'content-type': 'application/json' })
            }
            catch (error) { console.error('Error en postPersona', error.message) }
        },
    }
})