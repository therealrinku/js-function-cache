/**
 * @author Rinku Chaudhari
 * @description Cache your functions
 */

/**
 * cache functions to improve your site functionality
 * @param key unique string value to remember cache
 * @param func function to be cached
 * @param debug debug mode, shows logs output in console(true or false)
 */

let cache = {};

export default function jsFunctionCache(key, func, debug = true) {
  //return cache if availabe
  if (cache[key]) {
    if (debug) console.log(`---${key} is cached. returning the cached data---`);
    return cache[key];
  }

  if (debug) console.log(`---${key} not cached. caching---`);

  //store data in cache
  const res = func();
  cache[key] = res;

  return res;
}
