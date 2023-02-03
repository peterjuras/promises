// Synchronous vs asynchronous code paths
//
// ✅ Recommended to use

import express from "express";
import { fetchTemperature } from "./helpers/fetch-temperature.mjs";

const app = express();

async function getTemperature() {
  console.log("I'm fetching the temperature");
  const weatherApi = "https://open-meteo.com/en/features"; // Invalid URL!!
  const response = await fetchTemperature(weatherApi);
  return response.json();
}

let cachedPromise;

app.get("/", async (req, res, next) => {
  try {
    console.log("Incoming request");
    if (!cachedPromise) {
      cachedPromise = getTemperature();
    }

    const result = await cachedPromise;
    res.json(result);
  } catch (error) {
    next(error);
  }
});

app.listen(3000, () => {
  console.log("Server started");
});
