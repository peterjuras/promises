// Building your own promises
//
// 🚫 Not recommended: Prefer fs/promises

import fs from "fs";
import { promisify } from "util";

const fsReadFileAsync = promisify(fs.readFile);

const content = await fsReadFileAsync("scenario-13.mjs", "utf-8");
console.log(content);
