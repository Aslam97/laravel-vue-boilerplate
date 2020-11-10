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
    return context.next;
  }

  return (...param) => {
    context.next(...param);

    const nextMiddleware = nextFactory(context, middlewareArr, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}
/**
 *
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

export { nextFactory, resolveMiddleware };
