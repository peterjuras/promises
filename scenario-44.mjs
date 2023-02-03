// Batching
// Promise.all
//
// 🚫 Not recommended: Promise.all makes it hard to handle individual promise errors

import chunk from "lodash/chunk.js";
import Promise from "./helpers/promise-with-progress.mjs";
import { getPhotos } from "./helpers/get-photos.mjs";
import { uploadFile } from "./helpers/upload-file.mjs";

const tasks = getPhotos(100);

const batches = chunk(tasks, 10);

for (const batch of batches) {
  await Promise.all(batch.map(uploadFile));
}
