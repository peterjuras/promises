// Pitfalls of .then, .catch & .finally - Round 2
//
// 🔥 Crashes the program: Unhandled promise rejection in line 9

const promise = fetch("https-alternative://icanhazdadjoke.com/"); // Invalid URL!

console.log("Started fetching the joke");

promise.finally(() => {
  console.log("Finished fetching (successfully or not)");
});

promise.catch((error) => {
  console.error(
    "An error occurred while fetching, but it's ok since it likely was a bad joke anyways."
  );
});
