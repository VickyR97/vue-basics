<template>
  <div>
            <h4 class="font-weight-bold pt-2 ml-2">API tryouts</h4> 
            <!-- JSON Server Data -->
            <div class="row border border-dark rounded mb-5 mr-2 ml-2">
                <div class="col-12">
                    <h5 class="mt-3 font-weight-bold">JSON server data</h5>
                    
                    <!-- Loading State -->
                    <div class="text-center">
                        <p class="display-4 loading-state" v-if="isloading">Loading...</p>
                    </div>
                    
                    <!-- JSON Placeholder Response -->
                    <ul class="mt-4 mb-5 list-group" v-if="!isloading">
                      <li class="list-unstyled list-group-item font-weight-bold bg-dark text-white">JSON Data Sample Users ({{jsonUsersCount}})</li>
                      <li class="list-unstyled list-group-item" v-for="(element, index) in jsonUsers" v-bind:key="index">{{element.username}}
                      </li>
                    </ul>
                </div>
            </div>

            <!-- Mongo DB -->
            <div class="row border border-dark rounded mb-5 mr-2 ml-2">
                <div class="col-12">
                    <h5 class="mt-3 font-weight-bold">Mongo DB data </h5>
                </div>
            </div>
            <!-- Airtable -->
            <div class="row border border-dark rounded mb-5 mr-2 ml-2">
                <div class="col-12">
                    <h5 class="mt-3 font-weight-bold">Airtable data</h5>
                </div>
            </div>

        </div>
</template>

<script>
import axios from "axios";
// const mongoose = require('mongoose')

// import {dbConnect}  from "../db-server/server";

export default {
    components: {
        
  },
  data(){
      return{
          jsonUsers: [],
          jsonUsersCount: 0,
          isloading: false

      }
  },
  async created(){
    // API Tryout (JSON Placeholder data)
    try {
        this.isloading = true
        await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
          this.isloading = false  
          this.jsonUsers = res.data
          this.jsonUsersCount = this.jsonUsers.length
      }) 
      } catch (error) {
          console.log(error)
      }
    
  },
  
}
</script>

<style scoped>

@media only screen and (max-width:800px){
    .loading-state{
        font-size: 40px;
    }
}

</style>