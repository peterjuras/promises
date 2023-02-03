// Batching
// Promise.all
//
// 🚫 Not recommended: Avoid passing no value to Promise.all

// This will resolve immediately
await Promise.all([]);
console.log("Resolved!");

try {
  await Promise.all();
} catch (error) {
  console.error("Promise.all must receive an array");
}
