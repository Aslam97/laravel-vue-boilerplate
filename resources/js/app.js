import Vue from 'vue';
import router from '@router';
import store from '@store';
import App from './app.vue';

// Globally register all `_base`-prefixed components
import '@components/_globals';

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
