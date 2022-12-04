/**
 * @params `fn`: Function that needs to be tested
 * 
 * @returns true if functions is async, false in case it is not
 */

const isAsync = (fn: Function) => {
  return fn.constructor.name === 'AsyncFunction';
}

export { isAsync as isAsyncFunction }