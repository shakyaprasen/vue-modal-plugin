import Vue from 'vue';
import App from './App.vue';
import ModalHandler from './plugin/index';

Vue.use(ModalHandler);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
