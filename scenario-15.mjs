// Pitfalls of .then, .catch & .finally - Round 2
//
// 🚫 Not recommended: Prefer async/await

const promise = fetch("https://icanhazdadjoke.com/");

console.log("Started fetching the joke");

promise.finally(() => {
  console.log("Finished fetching (successfully or not)");
});

promise.catch((error) => {
  console.error(
    "An error occurred while fetching, but it's ok since it likely was a bad joke anyways."
  );
});
