import store from '@store';

export default ({ next }) => {
  if (store.getters['auth/loggedIn']) {
    next({ name: 'home' });
  }

  next();
};
