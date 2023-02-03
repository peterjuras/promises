// async-await
// Awaiting a promise multiple times
//
// 🔥 Crashes the program: Unhandled promise rejection in line 26

import express from "express";
import { fetchTemperature } from "./helpers/fetch-temperature.mjs";

async function getTemperature() {
  console.log("I'm fetching the temperature");
  const weatherApi = "https://open-meteo.com/en/features"; // Invalid URL!!
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
