// Synchronous vs asynchronous code paths
// Fire & Forget
//
// ✅ Recommended to use

import { delay } from "./helpers/delay.mjs";
import { fetchTemperature } from "./helpers/fetch-temperature.mjs";

async function updateCache(data) {
  // Request to update the cache ...
  await delay(3000);
  console.log("Updated the cache");
}

async function fireAndForget(promise) {
  try {
    await promise;
  } catch (error) {
    // Log or ignore error
  }
}

async function getTemperature() {
  console.log("I'm fetching the temperature");
  const weatherApi = "https://api.open-meteo.com/v1/forecast";
  const response = await fetchTemperature(weatherApi);
  const result = await response.json();
  fireAndForget(updateCache());
  return result;
}

try {
  const data = await getTemperature();
  console.log(data.temperature);
} catch (error) {
  console.error(error);
}
