import Vue from 'vue'
import App from './App.vue'
import { store } from "./store/store";
import { router } from "./Routes/Routes";




Vue.config.productionTip = false

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
