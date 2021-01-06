<template>
  <div>
      <Header />

    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <Menu />
        </div>

        <div class="col-9">
            <h4 class="font-weight-bold pt-2 ml-2">API tryouts</h4> 
            <!-- JSON Server Data -->
            <div class="row border border-dark rounded mb-5 mr-2 ml-2">
                <div class="col-12">
                    <h5 class="mt-3 font-weight-bold">JSON server data</h5>
                    <ul class="mt-4 mb-5 list-group">
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

    </div>
    </div>

    
  </div>
</template>

<script>
import Header from "./Header";
import Menu from "./Horizontal-menu";
import axios from "axios"

export default {
    components: {
        Header,
        Menu
  },
  data(){
      return{
          jsonUsers: [],
          jsonUsersCount: 0

      }
  },
  async created(){
      try {
        await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
          this.jsonUsers = res.data
          this.jsonUsersCount = this.jsonUsers.length
      }) 
      } catch (error) {
          console.log(error)
      }
      
  }

}
</script>

<style>

</style>