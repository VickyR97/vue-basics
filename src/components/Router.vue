<template>
    <div>
            <h4 class="font-weight-bold pt-2 ml-2">Vue Router</h4> 

            <div class="row border border-dark rounded mb-5 mr-2 ml-2">
            <div class="col-12">
                <h5 class="mt-3 font-weight-bold">vue-router</h5>
                <p class="pl-5">
                Vue Router is deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze.
              </p>
              <p>Features include:</p>
                <ul>
                    <li class="ml-5" v-for="element in features" :key="element">{{element}}</li>
              </ul>
            </div>
            </div>

        </div> 
</template>

<script>
export default {
    components: {
  },
  data(){
      return{
         features:[
            'Nested route/view mapping',
            'Modular, component-based router configuration',
            'Route params, query, wildcards',
            'View transition effects powered by Vue.js transition system',
            'Fine-grained navigation control',
            'Links with automatic active CSS classes',
            'HTML5 history mode or hash mode, with auto-fallback in IE9',
            'Customizable Scroll Behavior'
            ] 
      }
  }
}
</script>

<style>

</style>