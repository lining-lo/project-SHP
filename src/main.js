import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from '@/pages/Home/TypeNav'

Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
