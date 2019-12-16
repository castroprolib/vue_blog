import Vue from 'vue'
import App from './App.vue'

// importo vue router
import VueRouter from 'vue-router'

Vue.config.productionTip = false


Vue.use(VueRouter);

new Vue({
  render: h => h(App),
}).$mount('#app')
