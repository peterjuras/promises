// async-await
// Awaiting a promise multiple times
//
// 🚫 Not recommended: Unhandled promise rejection in line 27

import express from "express";
import { fetchTemperature } from "./helpers/fetch-temperature.mjs";

async function getTemperature() {
  console.log("I'm fetching the temperature");
  const weatherApi = "https://api.open-meteo.com/v1/forecast";
  const response = await fetchTemperature(weatherApi);
  return response.json();
}

const app = express();
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
