<template>
  <div>
            <h4 class="font-weight-bold pt-2 ml-2">Dynamic Components</h4> 

            <div class="row border border-dark rounded mb-5 mr-2 ml-2">
            <div class="col-12">
                <h5 class="mt-3 font-weight-bold">Examples</h5>
                <ComponentNavigation @navigate="changeComponent" />

                <div class="p-5 border">
                    <component :is="Currentcomponent" />
                    
                </div>
                
                
            </div>
            </div>

        </div> 
</template>

<script>
import ComponentNavigation from "./ComponentNavigation";
import APITryouts from "./API-tryouts";
import Routes from "./Router";
export default {
    components:{
        ComponentNavigation,
        APITryouts,
        Routes
    },
    data(){
        return{
            Currentcomponent: "Routes"
        }
    },
    methods:{
        changeComponent(value){
            this.Currentcomponent = value
        }
    }
}
</script>

<style>

</style>