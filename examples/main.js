import Vue from 'vue'
import App from './App.vue'
import CheckPerson from '../packages'

Vue.config.productionTip = false
Vue.use(CheckPerson);

new Vue({
  render: h => h(App),
}).$mount('#app')
