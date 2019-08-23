import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  iconfont: 'mdi'
})

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  modules: {

  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
