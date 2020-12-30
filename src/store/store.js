import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        Heading: 'State Management Example',
        links: [
            'www.google.com',
            'www.youtube.com',
            'www..gmail.com'
        ],
        isLoading: false
        
    },
    getters:{
        linksCount: state =>{
            return state.links.length
        }
    },
    mutations:{
        ADD_LINK: (state, link) =>{
            if(link !== ''){
                state.links.push(link)
            }
            
        },
        REMOVE_LINK: (state, link) =>{
            state.links.splice(link,1)
        }
    },
    actions:{
        removelink: (context, link) =>{
            context.commit("REMOVE_LINK", link)
        }
    }
})