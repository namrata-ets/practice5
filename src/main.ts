import Vue from 'vue'
import App from './App.vue'
import vuetify from 'vuetify/lib/framework'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
