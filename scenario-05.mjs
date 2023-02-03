// Pitfalls of .then, .catch & .finally
//
// 🚫 Not recommended: Prefer async/await

import { fetchTemperature } from "./helpers/fetch-temperature.mjs";

const weatherApi = "https://api.open-meteo.com/v1/forecast";

const requestStartTime = Date.now();

fetchTemperature(weatherApi)
  .then((response) => response.json())
  .then((data) => console.log(data.temperature))
  .finally(() => {
    const completionTime = Date.now() - requestStartTime;
    console.log(`Finished after ${completionTime}ms.`);
  });
