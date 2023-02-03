// Synchronous vs asynchronous code paths
// (Same as scenario 28)
//
// 🚫 Not recommended: Unhandled promise rejection in line 27

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
  console.log("Incoming request");
  if (!cachedPromise) {
    cachedPromise = getTemperature();
  }

  const result = await cachedPromise;
  res.json(result);
});

app.listen(3000, () => {
  console.log("Server started");
});
