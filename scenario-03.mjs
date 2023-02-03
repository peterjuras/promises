// Pitfalls of .then, .catch & .finally
//
// 🔥 Crashes the program: Promise should be handled

import { fetchTemperature } from "./helpers/fetch-temperature.mjs";

const weatherApi = "https://open-meteo.com/en/features"; // Invalid URL!

fetchTemperature(weatherApi)
  .then((response) => response.json())
  .then((data) => console.log(data.temperature));
