// Pitfalls of .then, .catch & .finally
//
// 🚫 Not recommended: Prefer async/await

import { fetchTemperature } from "./helpers/fetch-temperature.mjs";

const weatherApi = "https://api.open-meteo.com/v1/forecast";

fetchTemperature(weatherApi)
  .then((response) => response.json())
  .then((data) => console.log(data.temperature));
