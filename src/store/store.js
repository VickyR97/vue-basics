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
        isLoading: false,
        mutationCount: 0,
        actionCount: 0
        
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
        },
        MUTATION_COUNT_INCREMENT:(state) =>{
            setTimeout(()=>{
                state.mutationCount +=2;
            },3000)
            // state.mutationCount +=1;
        },
        ACTION_COUNT_INCREMENT:(state) =>{
            state.actionCount +=1;
        },
        ACTION_COUNT_INCREMENT2:(state) =>{
            state.actionCount +=2;
        }
    },
    actions:{
        removelink: (context, link) =>{
            context.commit("REMOVE_LINK", link)
        },
        actionIncrement:(context) =>{
            setTimeout(()=>{
            context.commit("ACTION_COUNT_INCREMENT2")
            },3000)
            // context.commit("ACTION_COUNT_INCREMENT")
        }
    }
})