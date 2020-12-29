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

          <!-- Getter -->
          <div class="row border border-dark rounded mb-5 mr-2 ml-2">
                <div class="col-12">
                    <h5 class="mt-3 font-weight-bold">Getter</h5>
                    <p class="pl-5">Get pieces of state or computed value from state</p>
                    <p class="mt-5 mb-2">
                        <b>Example</b>
                    </p>

                    <p class="pl-5">{{getterExampleData}}</p>
                    <p>
                        <small class="mt-2" v-html="Reference"></small>
                    </p>
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

export default {
  components: {
    Header,
    Menu
  },
  data() {
    return {
      stateDescription: "App level state/data (todos, counters etc..,)",
      Example: "Without Vuex",
      Reference:
        'For your reference follow this youtube channel <a target="_blank" href="https://www.youtube.com/watch?v=BGAu__J4xoc"> The Net Ninja </a>'
    };
  },
  computed: {
    stateExampleData() {
      return this.$store.state.Example;
    },
    getterExampleData(){
      return this.$store.getters.getterDataModification;  
    }

  }
};
</script>

<style>
</style>