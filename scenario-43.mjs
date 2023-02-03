// Batching
// Promise.all
//
// 🚫 Not recommended: Don't fire off a large number of promises. Batch them into chunks instead

import chunk from "lodash/chunk.js";
import Promise from "./helpers/promise-with-progress.mjs";
import { getPhotos } from "./helpers/get-photos.mjs";
import { uploadFile } from "./helpers/upload-file.mjs";

const tasks = getPhotos(100);

await Promise.all(tasks.map(uploadFile));
