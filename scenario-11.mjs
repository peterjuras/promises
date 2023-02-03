// Building your own promises
//
// 🚫 Not recommended: Prefer fs/promises

import fs from "fs";

fs.readFile("scenario-11.mjs", "utf-8", (error, content) => {
  if (error) {
    console.error(error);
  } else {
    console.log(content);
  }
});
