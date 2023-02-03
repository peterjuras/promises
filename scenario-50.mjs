// Batching
// Promise.race
//
// ✅ Recommended to use

import { delay } from "./helpers/delay.mjs";

async function delayedValue(value, timeout) {
  await delay(timeout);
  return value;
}

const value = await Promise.race([
  delayedValue("A", 1000),
  delayedValue("B", 500),
  delayedValue("C", 1500),
]);
console.log(value);
