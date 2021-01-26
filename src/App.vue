<template>
  <div>
      <Header />
    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <Menu />
        </div>
        <div class="col-9">
            <router-view></router-view>
        </div>

      </div>
    </div>

   
  </div>
</template>

<script>
import Header from "./components/Header";
import Menu from "./components/Horizontal-menu";


export default {
  
  components: {
    Header,
    Menu
  },
  data(){
    return{
     
    }
  }
}
</script>

<style>


</style>
