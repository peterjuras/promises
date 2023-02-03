// Synchronous vs asynchronous code paths
//
// ✅ Recommended to use

async function getTemperature() {
  const { fetchTemperature } = await import("./helpers/fetch-temperature.mjs");
  console.log("I'm fetching the temperature");
  const weatherApi = "https://api.open-meteo.com/v1/forecast";
  const response = await fetchTemperature(weatherApi);
  return response.json();
}

async function mainProgram() {
  try {
    const data = await getTemperature();
    console.log(data.temperature);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

mainProgram();
