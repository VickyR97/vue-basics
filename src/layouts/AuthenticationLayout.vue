<template>
  <b-container class="align-items-center">
      <!-- <b-row class="row align-items-center">
          <b-col cols="0" md="4" sm="0" class="bg-dark text-white justify-left ">
              
                        <div class="">
                            <h1 class="display-4 font-weight-bold mb-3">VDoc</h1>
                        </div>
                        <div>
                            <p class="font-weight-bold mb-1">Welcome to VDoc!</p>
                            <p class="">Documentation of Vue tryouts</p>
                        </div>              
          </b-col>
          <b-col cols="12" md="8" sm="12" class="align-self-stretch">
                <b-row class="justify-content-center">
                    <b-col cols="12" md="8">
                        <slot />      
                    </b-col>
                </b-row>
          </b-col>
      </b-row> -->

        <b-row class="justify-content-center">
            <b-col cols="12" md="5">
                <slot />
            </b-col>
        </b-row>
  </b-container>
</template>

<script>
export default {

}
</script>

<style>

</style>