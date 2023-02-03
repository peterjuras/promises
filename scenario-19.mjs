// Pitfalls of .then, .catch & .finally - Round 2
//
// 🚫 Not recommended: Prefer async/await

const promise = fetch("https-alternative://icanhazdadjoke.com/").finally(() => {
  console.log("Finished fetching (successfully or not)");
});

console.log("Started fetching the joke");

try {
  promise.catch((error) => {
    console.error(
      "An error occurred while fetching, but it's ok since it likely was a bad joke anyways."
    );
  });
} catch (error) {
  console.error("Try catch always helps - until it doesn't!");
}
