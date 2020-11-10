import store from '@store';

export default [
  {
    path: '/',
    name: 'home',
    component: loadView('index.vue'),
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: loadView('auth/login.vue'),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        console.log('test');
        // by default if its come from server it will automatically redirect to home because Auth::routes();
        // this handle only applies if it comes from vue-router
        if (store.getters['auth/loggedIn']) {
          next({ name: 'home' });
        } else {
          next();
        }
      },
    },
  },
  {
    path: '/register',
    name: 'register',
    component: loadView('auth/register.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: require('@views/errors/_404.vue').default,
    // Allows props to be passed to the 404 page through route
    // params, such as `resource` to define what wasn't found.
    props: true,
  },
  {
    path: '*',
    redirect: '404',
  },
];

function loadView(path) {
  return () =>
    import(
      /* webpackChunkName: "[request]" */
      // /* webpackPrefetch: true */
      // /* webpackPreload: true */
      `@views/${path}`
    );
}
