import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  modules: {

  }
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
