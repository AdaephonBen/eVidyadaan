import Vue from 'vue'
import { Navbar, Button, ListGroup } from 'bootstrap-vue/es/components'
import App from './App.vue'
Vue.use(Navbar)
Vue.use(Button)
Vue.use(ListGroup)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
