// Batching
// Promise.all
//
// 🚫 Not recommended: Promise.all makes it hard to handle individual promise errors
// Also: Avoid non-idempotent APIs

import { toggleExperiment } from "./helpers/toggle-experiment.mjs";

const experiments = ["A", "B", "C"];

try {
  await Promise.all(experiments.map(toggleExperiment));
} catch (error) {
  console.error(
    "Something went wrong! And I can't repeat the API calls, since some experiments might have been toggled already!"
  );
}
