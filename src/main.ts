import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import { createRouter } from './router';
import store from './store';

Vue.config.productionTip = false;
let router = createRouter(Vue, store);

console.log({ router });

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
