<template>
  <div>  
            <h4 class="font-weight-bold pt-2 ml-2">Analytics</h4> 

            <div class="row border border-dark rounded mb-5 mr-2 ml-2">
            <div class="col-12">
                <div class="row">

                    <div class="col-sm text-center">
                        <h3 class="mt-3">Link</h3>
                        <p class="display-4">{{linksCount}}</p>
                    </div>

                
                    <div class="col-sm text-center">
                         <h3 class="mt-3">Current links</h3>
                          <ul class="mt-4 mb-5 p-0">
                            <li class="list-unstyled mt-3" v-for="(element, index) in links" v-bind:key="index">{{element}} 
                            </li>
                          </ul>
                    </div>


                    <div class="col-sm text-center">
                         <h3 class="mt-3">Mutation Count</h3>
                        <p class="display-4">{{mutationCount}}</p>
                    </div>
                    <div class="col-sm text-center">
                         <h3 class="mt-3">Action Count</h3>
                        <p class="display-4">{{actionCount}}</p>
                    </div>
                    
                </div>

                   <!--Mutations vs Actions  -->
                <div class="row">

                    <div class="col-6"></div>
                    <div class="col-6"></div>
                    
                </div>

            </div>
            </div>     
  </div>
</template>

<script>
import {mapState, mapGetters} from "vuex"


export default {
  components: {
        
  },
  computed:{
    ...mapState([
      'links',
      'mutationCount',
      'actionCount'
    ]),

    ...mapGetters([
      'linksCount'
    ])
  }

}
</script>

<style>

</style>