import Vue from 'vue'
import  VueRouter  from "vue-router";
import Directives from '../components/vue-directives.vue'
import  Route  from "../components/Router.vue";
import Hook from "../components/Hooks.vue";
import vuexEg from "../components/vuex-example.vue";

Vue.use(VueRouter)


export const router = new VueRouter({
    routes:[
        {path: '/', component: Directives},
        {path: '/router', component: Route},
        {path: '/hook', component: Hook},
        {path: '/vuex', component: vuexEg},
    ],
    mode: 'history'
  })