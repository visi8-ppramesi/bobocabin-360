import Vue from 'vue'
import App from './App.vue'
import Marzipano from 'marzipano'
import router from './router'
import './assets/tailwind.css'

Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '$marzipano', { value: Marzipano });
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
