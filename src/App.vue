<template>
  <div>
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>  
  </div>
</template>

<script>
import fire from './config/firebase'

export default {
  
  components: {
  },
  data(){
    return{
      layout: "div",
      user : {}
    }
  },
  async mounted(){
     fire.auth().onAuthStateChanged(users =>{
            this.user = {users}
        })
  }
}
</script>

<style>


</style>
