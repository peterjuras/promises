// async-await
//
// 🚫 Not recommended: Unhandled promise rejection in line 13

import { fetchTemperature } from "./helpers/fetch-temperature.mjs";

async function getTemperature() {
  const weatherApi = "https://api.open-meteo.com/v1/forecast";
  const response = await fetchTemperature(weatherApi);
  return response.json();
}

const data = await getTemperature();
console.log(data.temperature);
