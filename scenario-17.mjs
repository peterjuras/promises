// Pitfalls of .then, .catch & .finally - Round 2
//
// 🔥 Crashes the program: Unhandled promise rejection in line 9

const promise = fetch("https-alternative://icanhazdadjoke.com/");

console.log("Started fetching the joke");

promise.finally(() => {
  console.log("Finished fetching (successfully or not)");
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
