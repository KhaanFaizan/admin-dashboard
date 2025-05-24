import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueRouter from 'vue-router';
import RevenueAnalysis from './components/RevenueAnalysis.vue';
import InventoryManagement from './components/InventoryManagement.vue';
import ProductRegistration from './components/ProductRegistration.vue';

Vue.use(Vuetify);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: RevenueAnalysis },
  { path: '/inventory', component: InventoryManagement },
  { path: '/register', component: ProductRegistration },
];

const router = new VueRouter({
  routes,
});

new Vue({
  vuetify: new Vuetify(),
  router,
  render: h => h(App),
}).$mount('#app'); 