// Batching
// Promise.race
//
// ✅ Recommended to use

import { delay } from "./helpers/delay.mjs";
import { fetchTemperature } from "./helpers/fetch-temperature.mjs";

async function getTemperature() {
  const weatherApi = "https://api.open-meteo.com/v1/forecast";
  const response = await fetchTemperature(weatherApi);
  const result = await response.json();
  return result;
}

async function timeout(ms) {
  await delay(ms);
  throw new Error("Timed out!");
}

try {
  const data = await Promise.race([getTemperature(), timeout(10)]);
  console.log(data.temperature);
} catch (error) {
  console.error(error);
}
