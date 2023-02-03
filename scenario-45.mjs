// Batching
// Promise.all
//
// 🚫 Not recommended: Promise.all makes it hard to handle individual promise errors

import chunk from "lodash/chunk.js";
import { getPhotos } from "./helpers/get-photos.mjs";
import { uploadFile } from "./helpers/upload-file.mjs";

const tasks = getPhotos(100, { withErrors: true });

const batches = chunk(tasks, 10);

for (const batch of batches) {
  try {
    await Promise.all(batch.map(uploadFile));
  } catch (error) {
    console.error(
      "At least one of the tasks within the batch failed ... But I don't know which one 🤔"
    );
  }
}
