// Pitfalls of .then, .catch & .finally
//
// 🚫 Not recommended: Prefer async/await

import { fetchTemperature } from "./helpers/fetch-temperature.mjs";

const weatherApi = "https://open-meteo.com/en/features"; // Invalid URL!

fetchTemperature(weatherApi)
  .then((response) => response.json())
  .catch(() => ({ temperature: "Fallback temperature: 0°" }))
  .then((data) => console.log(data.temperature));
