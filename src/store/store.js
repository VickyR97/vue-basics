import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        Example: 'With Vuex'
    },
    getters:{
        getterDataModification: state =>{
            return state.Example + '\t' +'and Getters modification'
        }
    }
})