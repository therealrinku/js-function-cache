/**
 * @author Rinku Chaudhari
 * @description Cache your functions
 */

/**
 * cache functions to improve your site functionality
 * @param key unique string value to remember cache
 * @param func function to be cached
 */

let cache = {};

export default function funCache(key, func, debug=true) {
  //return cache if availabe
  if (cache[key]) return cache[key];

  if(debug) console.log(`---${key} not cached. calculating and caching---`);
  //store data in cache
  const res = func();
  cache[key] = res;

  return res;
}
