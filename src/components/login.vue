<template>
    <b-container class="border rounded-bottom p-0 mt-5">

            <div class="text-center bg-dark text-white rounded-top" style="height:100px; line-height:50px;">
                <h2 class="font-weight-bold mb-0 pt-3">VDoc</h2>
                <p><small><strong> To continue, log in to VDoc </strong> </small> </p>
            </div>
        <div class="p-5">

            <b-form>
                <!-- Email -->  
                <b-form-group
                class="mb-4"
                label="Email"
                description="We'll never share your email with anyone else."
                >
                <b-form-input v-model="email" trim class="mb-2 mr-sm-2 mb-sm-0"
                :class="{'is-invalid' : submitStatus && $v.email.$invalid, 'is-valid' : !$v.email.$invalid }"
                ></b-form-input>
                <b-form-valid-feedback>Email valid</b-form-valid-feedback>
                   <b-form-invalid-feedback v-if=" submitStatus && !$v.email.required ">Email required</b-form-invalid-feedback>
                   <b-form-invalid-feedback v-if=" submitStatus && !$v.email.email ">Please enter valid email</b-form-invalid-feedback>
                </b-form-group>

                <!-- Password -->
                <b-form-group
                label="Password"
                class="mb-4"
                >
                <b-form-input type="password" v-model="password" trim class="mb-2 mr-sm-2 mb-sm-0"
                :class="{'is-invalid' : submitStatus && $v.password.$invalid }"
                ></b-form-input>
                   <b-form-invalid-feedback v-if="submitStatus && !$v.password.required ">Password required</b-form-invalid-feedback>
                </b-form-group>


                <div class="mt-5">
                    <b-button @click="login" size="lg" block variant="dark font-weight-bold">Login</b-button>
                </div>
                <!-- <div class="text-center mt-4">
            <p>New to VDoc? <strong><a href="#" class="stretched-link text-decoration-none" >Join now </a></strong></p>
        </div> -->
            </b-form>
        </div>
        
    </b-container>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
    data(){
        return{
            email: '',
            password: '',
            submitStatus: false,
            success: false
        }
    },
    validations:{
        email:{
            required,
            email
        },
        password:{
            required
        }
    },
    async created(){
        try {
            if(localStorage.getItem('email')){
                    this.$store.commit("SET_AUTHENTICATION", true)
                    this.$store.commit("SET_USERNAME")
                    this.$router.replace({name:"directives"})    
                }else{
                    return
                }
        } catch (error) {
            console.log(error)
        }
    },
    methods:{
        async login(){
            this.submitStatus = true
             this.$v.$touch()
            if(this.$v.$anyError){
                this.success = false
            }
            else{
                await localStorage.setItem('email', this.email)
                if(localStorage.getItem('email')){
                    this.$store.commit("SET_AUTHENTICATION", true)
                    await this.$store.commit("SET_USERNAME")
                    this.$router.replace({name:"directives"})    
                }else{
                    console.log('login error')
                } 
            }
        }
    }
}
</script>

<style>

</style>