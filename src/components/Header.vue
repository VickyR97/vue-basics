<template>
    <!-- <div class="sticky-top d-flex justify-content-between bg-dark text-white align-items-center">
    <h1 class="pl-4 font-weight-bold pt-3 pb-3 m-0">VDoc</h1> 

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
  </div> -->

  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand class="mt-1"><h2 class="font-weight-bold">VDoc</h2></b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        
        <div v-if="loginController" class="d-flex">
            <router-link to="/login"><b-button class="ml-3 font-weight-bold">Sign in</b-button></router-link>
            <router-link to="/signup"><b-button class="ml-3 font-weight-bold">Sign up</b-button></router-link>
        </div>

        <div v-if="notification">
            <NotificationBell 
            class="mr-4 mt-2 pt-1"  
            iconColor="white" 
            size="20" 
            counterStyle="roundRectangle"
            />
        </div>
          
          <b-nav-item-dropdown class="ml-2" :text="this.user" right>
            <b-dropdown-item @click="logout">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>

</template>
<script>
import NotificationBell from 'vue-notification-bell'
import fire from '../config/firebase'

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
       drawer: true,
       user : ''
     }
   },
   mounted(){
     fire.auth().onAuthStateChanged(users =>{
            if(users){
                console.log(users)
                this.user = users.email
            }
        })
   },
   methods:{
     logout(){
       fire.auth().signOut()
            .then(() =>{
                this.$router.replace({name:"login"})
            })
            .catch(err =>{
                console.log("Logout Error", err)
            })
     }
   }
   
}
</script>

<style>


</style>