import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import NProgress from 'nprogress';
import routes from './routes';
import { resolveMiddleware, nextFactory, scrollBehavior } from '@utils/router';

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

  // If middleware isn't required for the route, just continue.
  if (!routeTo.meta.middleware) return next();

  const middleware = [];

  routeTo.matched.reduce((accumulator, currentValue) => {
    const tempMiddleware = [];

    // determines whether the middleware is an Array
    Array.isArray(currentValue.meta.middleware)
      ? tempMiddleware.push(...currentValue.meta.middleware)
      : tempMiddleware.push(currentValue.meta.middleware);

    // require each middlware
    accumulator.push(...resolveMiddleware(tempMiddleware));
  }, middleware);

  const context = { routeTo, routeFrom, next };
  const nextMiddleware = nextFactory(context, middleware, 1);

  return middleware[0]({ ...context, next: nextMiddleware });
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
