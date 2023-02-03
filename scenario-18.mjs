// Pitfalls of .then, .catch & .finally - Round 2
//
// 🚫 Not recommended: Prefer async/await

const promise = fetch("https-alternative://icanhazdadjoke.com/");

console.log("Started fetching the joke");

const aDifferentPromise = promise.finally(() => {
  console.log("Finished fetching (successfully or not)");
});
aDifferentPromise.catch(() => {
  // Let's ignore this error
});

try {
  promise.catch((error) => {
    console.error(
      "An error occurred while fetching, but it's ok since it likely was a bad joke anyways."
    );
  });
} catch (error) {
  console.error("Try catch always helps - until it doesn't!");
}
