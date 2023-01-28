/**
 * @author Rinku Chaudhari
 * @description Cache your functions
 */

import type { CacheModel } from "./types";

const cache: CacheModel = {};

/**
 * cache functions to improve your site functionality
 * @param key unique string value to remember cache
 * @param func function to be cached
 */
export default function funCache(key: string, func: Function) {
  //return cache if availabe
  if (cache[key]) return cache[key];

  //store data in cache
  if (cache[key]) cache[key] = func;

  return func;
}
