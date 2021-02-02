import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { store } from "./store/store";
import { router } from "./Routes/Routes";
import Vuelidate from 'vuelidate'


Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
