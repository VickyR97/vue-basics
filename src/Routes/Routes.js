import Vue from 'vue'
import  VueRouter  from "vue-router";
import Directives from '../components/vue-directives.vue'
import  Route  from "../components/Router.vue";
import Hook from "../components/Hooks.vue";
import vuexEg from "../components/vuex-example.vue";
import Analytics from "../components/Analytics.vue";
import API_tryouts from "../components/API-tryouts.vue";
import login from "../components/login.vue";
import primaryLayout from "../layouts/primary-layout.vue";
// import defaultLayout from "../layouts/default-layout.vue";
import AuthLayout from "../layouts/AuthenticationLayout.vue";
import { store } from '../store/store';

Vue.use(VueRouter)


export const router = new VueRouter({
    routes:[
        {
            path: '/',
            name: "initial", 
            beforeEnter:(to, from, next) =>{
                if(store.state.isAuthenticated == false){
                    next("/login")
                }else{
                    next("/directives")
                }
            }
        },
        {
            path: '/login', 
            component: login,
            meta:{ layout: AuthLayout }
            // meta:{ layout: primaryLayout }
        },
        {
            path: '/directives',
            name: 'directives',
            component: Directives,
            meta:{ layout: primaryLayout },
            beforeEnter:(to, from, next) =>{
                if(store.state.isAuthenticated == false){
                    next("/login")
                }else{
                    next()
                }
            }

        },
        {
            path: '/router',
            name: 'router',
            component: Route,
            meta:{ layout: primaryLayout },
            beforeEnter:(to, from, next) =>{
                if(store.state.isAuthenticated == false){
                    next("/login")
                }else{
                    next()
                }
            }
        },
        {
            path: '/hook',
            name: 'hook',
            component: Hook,
            meta:{ layout: primaryLayout },
            beforeEnter:(to, from, next) =>{
                if(store.state.isAuthenticated == false){
                    next("/login")
                }else{
                    next()
                }
            }
        },
        {
            path: '/vuex',
            name: 'vuex',
            component: vuexEg,
            meta:{ layout: primaryLayout },
            beforeEnter:(to, from, next) =>{
                if(store.state.isAuthenticated == false){
                    next("/login")
                }else{
                    next()
                }
            }
        },
        {
            path: '/analytics',
            name: 'analytics',
            component: Analytics,
            meta:{ layout: primaryLayout },
            beforeEnter:(to, from, next) =>{
                if(store.state.isAuthenticated == false){
                    next("/login")
                }else{
                    next()
                }
            }
        },
        {
            path: '/apitryouts',
            name: 'apitryouts',
            component: API_tryouts,
            meta:{ layout: primaryLayout },
            beforeEnter:(to, from, next) =>{
                if(store.state.isAuthenticated == false){
                    next("/login")
                }else{
                    next()
                }
            }
        },
    ],
    mode: 'history'
  })