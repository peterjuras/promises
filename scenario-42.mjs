// Special Promise functions
// Promise.any
//
// 🚫 Not recommended: Avoid scenarios where empty arrays are passed to Promise.any

import { delay } from "./helpers/delay.mjs";

const cache = {};
async function getFromCache(key) {
  if (!cache[key]) {
    throw new Error("Value not in cache!");
  }
  return cache[key];
}

const key = "key";
// Promise.any rejects if all promises reject
try {
  const result = await Promise.any([
    getFromCache(key),
    getFromCache(key),
    getFromCache(key),
  ]);
} catch (error) {
  console.error("Promise.any rejected!");
}

try {
  const result = await Promise.any([]);
} catch (error) {
  console.error("Promise.any rejects for an empty array!");
}
