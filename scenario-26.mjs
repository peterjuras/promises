// async-await
// Awaiting a promise multiple times
//
// ✅ Recommended to use

import { fetchTemperature } from "./helpers/fetch-temperature.mjs";

async function getTemperature() {
  const weatherApi = "https://api.open-meteo.com/v1/forecast";
  const response = await fetchTemperature(weatherApi);
  const result = await response.json();
  return result;
}

const promise = getTemperature();

try {
  const data = await promise;
  console.log(data.temperature);
} catch (error) {
  console.error("An error occurred while fetching!");
}

try {
  const data = await promise;
  console.log(data.temperature);
} catch (error) {
  console.error("An error occurred while fetching!");
}
