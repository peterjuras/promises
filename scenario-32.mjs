// Synchronous vs asynchronous code paths
//
// ✅ Recommended to use

import { fetchTemperature } from "./helpers/fetch-temperature.mjs";

async function getTemperature() {
  console.log("I'm fetching the temperature");
  const weatherApi = "https://api.open-meteo.com/v1/forecast";
  const response = await fetchTemperature(weatherApi);
  return response.json();
}

async function mainProgram() {
  const data = await getTemperature();
  console.log(data.temperature);
}

try {
  await mainProgram();
} catch (error) {
  console.error(error);
}
