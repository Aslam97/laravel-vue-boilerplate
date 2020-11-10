import store from '@store';

export default ({ next }) => {
  if (store.getters['auth/check']) {
    next({ name: 'home' });
  } else {
    next();
  }
};
