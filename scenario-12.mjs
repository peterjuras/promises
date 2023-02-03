// Building your own promises
//
// 🚫 Not recommended: Prefer fs/promises

import fs from "fs";

function fsReadFileAsync(...args) {
  return new Promise((resolve, reject) => {
    fs.readFile(...args, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

const content = await fsReadFileAsync("scenario-12.mjs", "utf-8");
console.log(content);
