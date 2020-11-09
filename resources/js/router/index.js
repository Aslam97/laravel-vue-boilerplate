import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import NProgress from 'nprogress';
import store from '@store';
import routes from './routes';

Vue.use(VueRouter);
Vue.use(VueMeta, {
  keyName: 'meta',
});

NProgress.configure({ showSpinner: false });

const router = new VueRouter({
  routes,
  // Use the HTML5 history API (i.e. normal-looking routes)
  // instead of routes with hashes (e.g. example.com/#/about).
  // This may require some server configuration in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  mode: 'history',
  scrollBehavior,
});

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start();

  // Check if auth is required on this route
  // (including nested routes).
  const authRequired = routeTo.matched.some(route => route.meta.authRequired);

  // If auth isn't required for the route, just continue.
  if (!authRequired) return next();

  // If auth is required and the user is logged in...
  if (store.getters['auth/loggedIn']) {
    // Validate the local user token...
    return store.dispatch('auth/validate').then(validUser => {
      // Then continue if the token still represents a valid user,
      // otherwise redirect to login.
      validUser ? next() : redirectToLogin();
    });
  }

  // If auth is required and the user is NOT currently logged in,
  // redirect to login.
  redirectToLogin();

  function redirectToLogin() {
    // Pass the original route to the login component
    next({ name: 'login', query: { redirectFrom: routeTo.fullPath } });
  }
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
