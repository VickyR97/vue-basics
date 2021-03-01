<template>
  <div>
      <b-navbar toggleable type="dark" variant="dark">
        <b-navbar-brand href="#">Navigation</b-navbar-brand>

        <b-navbar-nav class="ml-auto">
            <div class="d-flex">
                <b-button class="ml-2" size="sm" @click="()=>{this.$emit('navigate', 'APITryouts')}">API-tryouts</b-button>
                <b-button class="ml-2" size="sm" @click="()=>{this.$emit('navigate', 'Routes')}">Routes</b-button>
            </div>
        </b-navbar-nav>
      </b-navbar>

  </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>