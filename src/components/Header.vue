<template>
    <div class="sticky-top d-flex justify-content-between bg-dark text-white align-items-center">
    <h1 class="pl-4 font-weight-bold pt-3 pb-3 m-0">VDoc</h1> 
    <!-- <p class="pr-5 pt-3 pb-3 m-0">hai</p> -->

        <div class="dropdown pr-4 pt-3 pb-3 m-0 d-flex">
          <div v-if="notification">
            <NotificationBell 
            class="mr-4 mt-2"  
            iconColor="white" 
            size="25" 
            counterStyle="roundRectangle"
            count=5 
            />
          </div>
          <div v-if="loginController" class="d-flex">
            <router-link to="/login"><b-button class="ml-3 font-weight-bold">Sign in</b-button></router-link>
            <router-link to="/signup"><b-button class="ml-3 font-weight-bold">Sign up</b-button></router-link>
          </div>
          <div v-if="usernameBlock" class="ml-3">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{$store.state.username}}
              </button>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
                <button class="dropdown-item" type="button" @click="logout">Logout</button>
              </div>
          </div>
          
        </div>
  </div>

</template>
<script>
import NotificationBell from 'vue-notification-bell'

export default {
  components:{
    NotificationBell
  },
  props:{
    notification: Boolean,
    loginController: Boolean,
    usernameBlock: Boolean
  },
   data(){
     return{
       drawer: true
     }
   },
   methods:{
     logout(){
       localStorage.removeItem('email')
       window.location.reload()
     }
   }
   
}
</script>

<style>


</style>