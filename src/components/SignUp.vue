<template>
    <b-container class="border rounded-bottom p-0 mt-5">

            <div class="text-center bg-dark text-white rounded-top" style="height:100px; line-height:50px;">
                <!-- <Loading :active.sync="isLoading" 
                :can-cancel="false" 
                :is-full-page="true"></Loading> -->

                <h2 class="font-weight-bold mb-0 pt-3">Sign Up</h2>
                <p><small><strong> Create your account in VDoc </strong> </small> </p>
            </div>
        <div class="p-5">

            <b-form>
                <!-- Username -->
                <b-form-group
                class="mb-4"
                label="Username"
                >
                <b-form-input v-model="username" trim class="mb-2 mr-sm-2 mb-sm-0"
                :class="{'is-invalid' : submitStatus && $v.username.$invalid, 'is-valid' : !$v.username.$invalid }"
                ></b-form-input>
                <b-form-valid-feedback>Username valid</b-form-valid-feedback>
                   <b-form-invalid-feedback v-if=" submitStatus && !$v.username.alpha">Username must contains only characters!</b-form-invalid-feedback>
                   <b-form-invalid-feedback v-if=" submitStatus && !$v.username.required">Username required</b-form-invalid-feedback>
                </b-form-group>

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
                   <b-form-invalid-feedback v-if=" submitStatus && !$v.email.required ">Email required!</b-form-invalid-feedback>
                   <b-form-invalid-feedback v-if=" submitStatus && !$v.email.email">Please enter valid email</b-form-invalid-feedback>
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

                <!-- re-Password -->
                <b-form-group
                label="Confirm Password"
                class="mb-4"
                >
                <b-form-input type="password" v-model="repassword" trim class="mb-2 mr-sm-2 mb-sm-0"
                :class="{'is-invalid' : submitStatus && $v.repassword.$invalid ,'is-valid' : !$v.repassword.$invalid }"
                ></b-form-input>
                <b-form-valid-feedback>Password matched</b-form-valid-feedback>
                   <b-form-invalid-feedback v-if="submitStatus && !$v.repassword.required ">Confirm password required</b-form-invalid-feedback>
                   <b-form-invalid-feedback v-if="submitStatus && !$v.repassword.sameAs">Password didn't matched</b-form-invalid-feedback>
                </b-form-group>

                <div class="mt-5">
                    <b-button @click="signup" size="lg" block variant="dark font-weight-bold">Sign Up</b-button>
                </div>
                
                <div class="text-center mt-4">
                    Already registered 
                    <router-link :to="{name: 'login'}">sign in?</router-link>
                </div>
            </b-form>
        </div>
        
    </b-container>
</template>

<script>
import { required, email, alpha, sameAs } from 'vuelidate/lib/validators'

export default {
    data(){
        return{
            username: '',
            email: '',
            password: '',
            repassword: '',
            submitStatus: false,
            success: false,
            isLoading: false
        }
    },
    components:{
        // Loading
    },
    validations:{
        email:{
            required,
            email
        },
        password:{
            required
        },
        username:{
            alpha,
            required
        },
        repassword:{
            required,
            sameAsPassword: sameAs('password')
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
        async signup(){
            this.submitStatus = true
             this.$v.$touch()
            if(this.$v.$anyError){
                this.success = false
                return 0;
            }
            else{
            //    this.isLoading = true
                let loader = this.$loading.show({
                    container: this.fullPage ? null : this.$refs.formContainer,
                    canCancel: true,
                    onCancel: this.onCancel,
                    });
                await setTimeout(()=>{
                    loader.hide()
                    this.$router.replace({name:"login"})
               }, 2000)    
            }
        }
    }
}
</script>

<style>

</style>