<template>
  <div>
    <Header />

    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <Menu />
        </div>

        <div class="col-9">
          <h4 class="font-weight-bold pt-2 ml-2">Vuex</h4>

            <!-- State -->
            <div class="row border border-dark rounded mb-5 mr-2 ml-2">
                <div class="col-12">
                    <h5 class="mt-3 font-weight-bold">State</h5>
                    <p class="pl-5">{{stateDescription}}</p>
                    <p class="mt-5 mb-2">
                        <b>Example</b>
                    </p>

                    <p class="pl-5" v-text="Example"></p>
                    <p class="pl-5" v-text="stateExampleData"></p>
                    <p>
                        <small class="mt-2" v-html="Reference"></small>
                    </p>
                </div>
          </div>




          <!-- State Management -->
          <div class="row border border-dark rounded mb-5 mr-2 ml-2">
                <div class="col-12">
                    <!-- <h5 class="mt-3 font-weight-bold">{{Heading}}</h5> -->
                    
                    <h5 class="mt-3 font-weight-bold">{{Heading}}</h5>
                    <h5 class="ml-3 mt-4 mb-4">COUNT ({{linksCount}})</h5>
                    
                    <form 
                    class="form-group mx-sm-3 mb-2"
                    @submit.prevent="addLink"
                    >
                      <input type="text" class="form-control" placeholder="Add a link" v-model="newlink">
                    </form>
                    
                    <ul class="mt-4 mb-5">
                      <li class="list-unstyled mt-3" v-for="(element, index) in links" v-bind:key="index">{{element}} 
                        <button class="btn btn-dark" v-on:click="removeLink(index)">Remove</button>
                      </li>
                      
                    </ul>              
                    <p>
                      <small class="mt-2">
                        For your reference <a target="_blank" href="https://www.youtube.com/watch?v=ZSexhaiMKJE&feature=emb_logo"> DesignCourse </a>
                      </small>
                    </p>
                </div>
          </div>  


        <!-- Mutations vs Actions -->
            <div class="row border border-dark rounded mb-5 mr-2 ml-2">
                <div class="col-12">
                    <h5 class="mt-3 font-weight-bold">Mutations vs Actions</h5>
                    <p class="">
                      <ul>
                        <li class="ml-5" v-for="element in mutationsVsActions" :key="element">{{element}}</li>
                      </ul>
                    </p>
                    <p class="pl-5" v-html="mutationsVsActionsNote"></p>
                    
                    <!-- Example -->
                    <p class="mt-5 mb-2"><b>Example</b></p>
                    <div class="row">
                        <div class="col-6 text-center">
                            <b>Increment via Mutations</b>
                            <p class="display-4">{{mutationCount}}</p>
                            <p><button @click="MUTATION_COUNT_INCREMENT" class="btn btn-dark">Increment</button></p>
                          </div>
                        <div class="col-6 text-center">
                            <b>Increment via Actions</b>
                            <p class="display-4">{{actionCount}}</p>
                            <p><button @click="actionIncrement" class="btn btn-dark">Increment</button></p>
                          </div>
                          <p class="mt-2">
                        <small class="mt-2 ml-3" v-html="mutationsVsActionsReference"></small>
                    </p>
                    </div>
                    

                </div>
          </div>

        </div>


      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Menu from "./Horizontal-menu";
import {mapState, mapGetters, mapMutations, mapActions} from "vuex"
 
export default {
  components: {
    Header,
    Menu
  },
  data() {
    return {
      stateDescription: "App level state/data (todos, counters etc..,)",
      Example: 'this.$store.state.count',
      Reference:
        'For your reference <a target="_blank" href="https://www.youtube.com/watch?v=BGAu__J4xoc"> The Net Ninja </a>',
    
      newlink: '',
      mutationsVsActions: [
              'mutation is the only way to modify state',
              "mutation doesn't care about business logic, it just cares about 'state'",
              'action is business logic',
              "action can commit more than 1 mutation at a time, it just implements the business logic, it doesn't care about data changing (which manage by mutation)"

            ],
      mutationsVsActionsNote: '<b>Important:</b> We Shouldn’t put asynchronous logic inside the <b>mutation</b>.',
      mutationsVsActionsReference:
        'For your reference <a target="_blank" href="https://www.youtube.com/watch?v=arhCOcxIUo4&t=468s"> The Net Ninja </a>'      
    };
  },
  computed: {
    // Heading(){
    //   return this.$store.state.statemanagementHeading;
    // }

    ...mapState([
      'Heading',
      'links',
      'mutationCount',
      'actionCount'
    ]),

    ...mapGetters([
      'linksCount'
    ])

  },
  methods:{
    // MUTATIONS
    ...mapMutations([
      'ADD_LINK',
      'MUTATION_COUNT_INCREMENT'
    ]),
    addLink(){
      this.ADD_LINK(this.newlink)
      this.newlink = ''
    },
    
    // ACTIONS
    ...mapActions([
      'removelink',
      'actionIncrement'
    ]),
    removeLink(link){
      this.removelink(link)
    }

  }
};
</script>

<style>
</style>