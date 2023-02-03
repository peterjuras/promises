// Special Promise functions
// Promise.any
//
// 🚫 Not recommended: Don't waste bandwidth by firing unecessary API calls.

import { delay } from "./helpers/delay.mjs";

const cache = {};
async function getFromCache(key) {
  if (!cache[key]) {
    throw new Error("Value not in cache!");
  }
  return cache[key];
}

async function getFromDatabase(key) {
  await delay(2000);
  return "Value";
}

const key = "key";
const result = await Promise.any([getFromCache(key), getFromDatabase(key)]);
console.log(result);
