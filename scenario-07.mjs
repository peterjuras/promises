// Pitfalls of .then, .catch & .finally
//
// 🚫 Not recommended: Prefer async/await

async function getJoke(url) {
  if (!url) {
    throw new Error("url must be defined!");
  }

  return (
    fetch(url)
      // This won't work! dad jokes are returned as plain text by default
      .then((response) => response.json())
      .then((data) => console.log(data.joke))
  );
}

const url = "https://icanhazdadjoke.com/";

// Falls back to the catch function
getJoke(url).catch((error) => {
  console.error("An error occurred and you don't get a joke today");
});

// Falls back to the catch function
getJoke().catch((error) => {
  console.error("An error occurred and you don't get a joke today");
});
