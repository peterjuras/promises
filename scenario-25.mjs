// async-await
//
// ✅ Recommended to use

import { fetchTemperature } from "./helpers/fetch-temperature.mjs";

async function getTemperature() {
  try {
    const weatherApi = "https://open-meteo.com/en/features"; // Invalid URL!
    const response = await fetchTemperature(weatherApi);
    return await response.json();
  } catch (error) {
    console.error("An error occurred, but I don't care about it 🙌");
  }
}

const data = await getTemperature();
console.log(data?.temperature);
