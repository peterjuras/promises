// Batching
// Promise.allSettled
//
// 🚫 Not recommended: Promise.allSettled has disadvantages for heterogeneous tasks

import chunk from "lodash/chunk.js";
import { getPhotos } from "./helpers/get-photos.mjs";
import { uploadFile } from "./helpers/upload-file.mjs";

const tasks = getPhotos(100, { withErrors: true });

const batches = chunk(tasks, 10);

for (const batch of batches) {
  const results = await Promise.allSettled(batch.map(uploadFile));
  console.log("I can see exactly which task failed 🙌");
  console.log(results);
}
