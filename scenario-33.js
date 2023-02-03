// Synchronous vs asynchronous code paths
//
// 🔥 Crashes the program: Top level await not allowed in commonjs module (L18)

async function getTemperature() {
  const { fetchTemperature } = await import("./helpers/fetch-temperature.mjs");
  console.log("I'm fetching the temperature");
  const weatherApi = "https://api.open-meteo.com/v1/forecast";
  const response = await fetchTemperature(weatherApi);
  return response.json();
}

async function mainProgram() {
  const temperature = await getTemperature();
  console.log(temperature);
}

await mainProgram();
