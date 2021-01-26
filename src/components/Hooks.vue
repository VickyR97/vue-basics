<template>
  <div>
            <h4 class="font-weight-bold pt-2 ml-2">Vue Hooks</h4> 
            <div class="row border border-dark rounded mb-5 mr-2 ml-2">
              <div class="col-12">
                <h5 class="mt-3 font-weight-bold">Lifecycle hooks</h5>
                <p class="pl-5 mt-3" v-html="hooksDescription"></p>
                 <p>There are eight lifecycle methods:</p>
                <ul>
                    <li class="ml-5" v-for="element in hooks" :key="element">{{element}}</li>
              </ul>
              
              <h5 class="font-weight-bold pt-2 ml-2">Tips</h5> 
              <ul>
                    <li class="ml-5" v-for="element in tips" :key="element">{{element}}</li>
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
      hooksDescription: '<b>Lifecycle hooks</b> are the defined methods which get executed in a certain stage of the vue object lifespan. starting from the initialization, to when it gets destroyed, the object follows different phases of life.',
      hooks: [
        'Before create',
        'Created',
        'Before mount',
        'Mounted',
        'Before update',
        'Updated',
        'Before destroy',
        'Destroyed'
      ],
      tips:[
        'created method is useful when dealing with reading/writing the reactive data.(API calls)'
      ]
    }
  },
  // beforeCreate(){
  //   alert('beforCreate');
  // },
  // created(){
  //   alert('created');
  // },
  // beforeMount(){
  //   alert('beforeMount');
  // },
  // mounted(){
  //   alert('Mounted');
  // },
  // beforeUpdate(){
  //   alert('beforeUpdated');
  // },
  // updated(){
  //   alert('updated');
  // },
  // beforeDestroy(){
  //   alert('beforeDestroy');
  // },
  // destroyed(){
  //   alert('destroyed');
  // }
}
</script>

<style>

</style>