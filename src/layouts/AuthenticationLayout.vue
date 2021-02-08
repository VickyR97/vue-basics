<template>
  <b-container class="align-items-center">
        <b-row>
            <b-col cols="12">
                <!-- <Header loginController /> -->
            </b-col>
        </b-row>

        <b-row class="justify-content-center">
            <b-col cols="12" md="5">
                <!-- <Header loginController /> -->
                <slot />
            </b-col>
        </b-row>
  </b-container>
</template>

<script>
// import Header from "../components/Header";

export default {
    components: {
            // Header
        },
}
</script>

<style>

</style>