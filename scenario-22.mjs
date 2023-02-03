// async-await
//
// 🚫 Not recommended: Unhandled promise rejection in line 14

import { fetchTemperature } from "./helpers/fetch-temperature.mjs";

async function getTemperature() {
  const weatherApi = "https://api.open-meteo.com/v1/forecast";
  const response = await fetchTemperature(weatherApi);
  const result = await response.json();
  return result;
}

const data = await getTemperature();
console.log(data.temperature);
