// Pitfalls of .then, .catch & .finally - Round 2
//
// ✅ Recommended to use

try {
  const promise = fetch("https-alternative://icanhazdadjoke.com/");
  console.log("Started fetching the joke");
  await promise;
} catch (error) {
  console.error(
    "An error occurred while fetching, but it's ok since it likely was a bad joke anyways."
  );
} finally {
  console.log("Finished fetching (successfully or not)");
}
