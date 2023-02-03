// Building your own promises
//
// 🚫 Not recommended: Promises should resolve/reject exactly once.

function delay(ms) {
  return new Promise((resolve, reject) => {
    if (!Number.isInteger(ms) || ms <= 0) {
      resolve();
      reject(new Error("ms must be a positive integer!"));
      reject(new Error("ms must be a positive integer!"));
      resolve();
      reject(new Error("ms must be a positive integer!"));
      resolve();
      reject(new Error("ms must be a positive integer!"));
      reject(new Error("ms must be a positive integer!"));
    }

    console.log(`Waiting ${ms}ms.`);

    setTimeout(() => {
      resolve();
    }, ms);
  });
}

await delay(-1000);
