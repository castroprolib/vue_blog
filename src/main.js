import Vue from 'vue'
import App from './App.vue'

// importo vue router
import VueRouter from 'vue-router'
// importo las rutas de otro archivo
import { routes } from './routes';

Vue.config.productionTip = false


Vue.use(VueRouter);


const router = new VueRouter({
	routes: routes,
	mode: 'history'    
});

new Vue({
	render: h => h(App),
	router: router
}).$mount('#app')
