import store from '@store';

export default async ({ routeTo, next }) => {
  // If auth is required and the user is logged in...
  if (store.getters['auth/loggedIn']) {
    // Validate the local loggedIn...
    return store.dispatch('auth/validate').then(validUser => {
      // Then continue if the loggedIn still represents a valid user,
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
};
