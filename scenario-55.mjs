// Batching
// Promise.race
//
// 🚫 Not recommended: Use a library instead (e.g. p-queue)

import chunk from "lodash/chunk.js";
import {
  addPromiseToBatch,
  finished,
} from "./helpers/add-promise-to-batch.mjs";
import { getPhotos } from "./helpers/get-photos.mjs";
import { uploadFile } from "./helpers/upload-file.mjs";

const tasks = getPhotos(100, { includeVideos: true });

async function batch(array, fn, limit) {
  let index = 0;
  const results = Array(array.length);

  const promises = [];
  while (index < limit && index < array.length) {
    const item = array[index++];
    addPromiseToBatch(promises, fn(item), index, item);
  }

  while (promises.length) {
    const { result, index: resultIndex } = await Promise.race(promises);
    results[resultIndex] = result;

    if (index < array.length) {
      const item = array[index++];
      addPromiseToBatch(promises, fn(item), index, item);
    }
  }
  finished();

  return results;
}

await batch(tasks, uploadFile, 10);
