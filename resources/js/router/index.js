import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import NProgress from 'nprogress';
import routes from './routes';

Vue.use(VueRouter);
Vue.use(VueMeta, {
  keyName: 'meta',
});

const router = new VueRouter({
  routes,
  // Use the HTML5 history API (i.e. normal-looking routes)
  // instead of routes with hashes (e.g. example.com/#/about).
  // This may require some server configuration in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  mode: 'history',
  scrollBehavior,
});

router.beforeEach((to, from, next) => {
  NProgress.start();

  next();
});

router.afterEach(() => {
  NProgress.done();
});

// Simulate native-like scroll behavior when navigating to a new
// route and using back/forward buttons.
function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  }

  return { x: 0, y: 9 };
}

export default router;
