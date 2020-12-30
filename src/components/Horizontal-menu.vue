<template>
  <div class="">
              
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark rounded mt-3 p-0">
            <!-- <a href="#" class="navbar-brand">Menu</a> -->
            
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarMenu">
                <ul class="navbar-nav nav flex-column">
                    <li class="nav-item pr-4 pl-4 pt-2 pb-2 bg-dark font-weight-bold"> <router-link class="nav-link" to='/'> Directives</router-link> </li>
                    <li class="nav-item pr-4 pl-4 pt-2 pb-2 bg-dark font-weight-bold"> <router-link class="nav-link" to='/router'> Router</router-link> </li>
                    <li class="nav-item pr-4 pl-4 pt-2 pb-2 bg-dark font-weight-bold"> <router-link class="nav-link" to='/hook'> Hooks</router-link> </li>
                    <li class="nav-item pr-4 pl-4 pt-2 pb-2 bg-dark font-weight-bold"> <router-link class="nav-link" to='/vuex'> Vuex</router-link> </li>
                    <li class="nav-item pr-4 pl-4 pt-2 pb-2 bg-dark font-weight-bold"> <router-link class="nav-link" to='/analytics'> Analytics</router-link> </li>
                </ul>

            </div>

            
        </nav>


  </div>

</template>

<script>

export default {


}
</script>

<style>


</style>