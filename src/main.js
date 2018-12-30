import Vue from 'vue';
import App from './App.vue';
import ModalHandler from './plugin/plugin.js';

Vue.use(ModalHandler);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
