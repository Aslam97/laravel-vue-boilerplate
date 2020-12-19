import NProgress from 'nprogress';

/**
 *
 *
 * @param {*} context
 * @param {*} middlewareArr
 * @param {*} index
 * @returns
 */
function nextFactory(context, middlewareArr, index) {
  const subsequentMiddleware = middlewareArr[index];

  // if middleware undefined then next
  if (!subsequentMiddleware) {
    NProgress.done();
    return context.next;
  }

  return (...args) => {
    context.next(...args);

    const nextMiddleware = nextFactory(context, middlewareArr, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

/**
 *
 * @param {*} middlewareArr
 * @returns
 */
function resolveMiddleware(middlewareArr) {
  return middlewareArr.map(middleware => {
    return typeof middleware === 'function'
      ? middleware
      : require(`@middleware/${middleware.concat('.js')}`).default;
  });
}

// Simulate native-like scroll behavior when navigating to a new
// route and using back/forward buttons.
function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  }

  if (to.hash) {
    return {
      selector: to.hash,
      behavior: 'smooth',
    };
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ x: 0, y: 0 });
    }, 190);
  });
}

export { nextFactory, resolveMiddleware, scrollBehavior };
