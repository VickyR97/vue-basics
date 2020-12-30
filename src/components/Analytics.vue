<template>
  <div>
    <Header />

    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <Menu />
        </div>


        <div class="col-9">
            <h4 class="font-weight-bold pt-2 ml-2">Analytics</h4> 

            <div class="row border border-dark rounded mb-5 mr-2 ml-2">
            <div class="col-12">
                <div class="row">

                    <div class="col-3 text-center">
                        <h3 class="mt-3">Link</h3>
                        <p class="display-4">{{linksCount}}</p>
                    </div>

                
                    <div class="col-3">
                         <h3 class="mt-3">Current links</h3>
                          <ul class="mt-4 mb-5 p-0 ml-3">
                            <li class="list-unstyled mt-3" v-for="(element, index) in links" v-bind:key="index">{{element}} 
                            </li>
                          </ul>
                    </div>


                    <div class="col-3"></div>
                    
                </div>

                   <!--Mutations vs Actions  -->
                <div class="row">

                    <div class="col-6"></div>
                    <div class="col-6"></div>
                    
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
import {mapState, mapGetters} from "vuex"


export default {
  components: {
        Header,
        Menu
  },
  computed:{
    ...mapState([
      'links'
    ]),

    ...mapGetters([
      'linksCount'
    ])
  }

}
</script>

<style>

</style>