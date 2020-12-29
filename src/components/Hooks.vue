<template>
  <div>
      <Header />

    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <Menu />
        </div>


        <div class="col-9">
            <h4 class="font-weight-bold pt-2 ml-2">Vue Hooks</h4> 
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
  }
}
</script>

<style>

</style>