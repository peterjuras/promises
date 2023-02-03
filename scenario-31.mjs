// Synchronous vs asynchronous code paths
//
// 🚫 Not recommended: Unintentional promise usage in line 16

import { fetchTemperature } from "./helpers/fetch-temperature.mjs";

async function getTemperature() {
  console.log("I'm fetching the temperature");
  const weatherApi = "https://api.open-meteo.com/v1/forecast";
  const response = await fetchTemperature(weatherApi);
  return response.json();
}

function mainProgram() {
  const data = getTemperature();
  console.log(data);
}

mainProgram();
