<template>
    <div class="sticky-top d-flex justify-content-between bg-dark text-white align-items-center">
    <h1 class="pl-4 font-weight-bold pt-3 pb-3 m-0">Vue JS</h1> 
    <!-- <p class="pr-5 pt-3 pb-3 m-0">hai</p> -->

        <div class="dropdown pr-5 pt-3 pb-3 m-0">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{$store.state.username}}
          </button>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button" @click="logout">Logout</button>
          </div>
        </div>
  </div>

</template>
<script>
export default {
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