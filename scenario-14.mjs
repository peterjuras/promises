// Building your own promises
//
// ✅ Recommended to use

import fs from "fs/promises";

const content = await fs.readFile("scenario-14.mjs", "utf-8");
console.log(content);
