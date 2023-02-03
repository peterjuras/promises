// Batching
// Promise.race
//
// 🔥 Crashes the program: Promise.any with an empty array will NEVER resolve!

try {
  await Promise.race();
} catch (error) {
  console.error("Promise.race must receive an array");
}

await Promise.race([]);
console.log(
  "Warning! Promise.race with an empty array will NEVER resolve or reject!"
);

// Fun fact:
// Three different Promise methods react differently to empty arrays:
//
// Promise.any([]) => Rejects
// Promise.all([]) => Resolves
// Promise.race([]) => Hangs indefinitely
//
// JavaScript is amazing 🙌
