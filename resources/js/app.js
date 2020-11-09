import Vue from 'vue';
import router from '@router';
import store from '@store';
import i18n from '@utils/vue-i18n';
import App from './app.vue';

// Globally register all `_base`-prefixed components
import '@components/_globals';
import '@plugins';

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
