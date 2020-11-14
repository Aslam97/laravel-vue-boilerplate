function loadView(path) {
  return () =>
    import(
      /* webpackChunkName: "[request]" */
      // /* webpackPrefetch: true */
      // /* webpackPreload: true */
      `@views/${path}`
    );
}

import AppLayout from '@layouts/app.vue';
import AuthLayout from '@layouts/auth.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: loadView('index.vue'),
    meta: {
      layout: AppLayout,
      middleware: ['auth'],
    },
  },
  {
    path: '/login',
    name: 'login',
    component: loadView('auth/login.vue'),
    meta: {
      layout: AuthLayout,
      middleware: ['guest'],
    },
  },
  {
    path: '/register',
    name: 'register',
    component: loadView('auth/register.vue'),
    meta: {
      layout: AuthLayout,
      middleware: ['guest'],
    },
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
