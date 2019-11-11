import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './plugins/router';
import axios from './plugins/axios';
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

new Vue({
  axios,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
