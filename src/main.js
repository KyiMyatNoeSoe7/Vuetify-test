import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { routes } from './routes'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  vuetify,
  router: router,
  render: h => h(App)
}).$mount('#app')
