// Pitfalls of .then, .catch & .finally
//
// 🚫 Not recommended: Prefer async/await

import { fetchTemperature } from "./helpers/fetch-temperature.mjs";

const weatherApi = "https://api.open-meteo.com/v1/forecast";

fetchTemperature(weatherApi);

// Without assigning to a variable, same as:
fetchTemperature(weatherApi).then(() => {});
