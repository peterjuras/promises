// Building your own promises
//
// 🚫 Not recommended: Unhandled promise rejection in line 20

function delay(ms) {
  return new Promise((resolve, reject) => {
    if (!Number.isInteger(ms) || ms <= 0) {
      reject(new Error("ms must be a positive integer!"));
      return;
    }

    console.log(`Waiting ${ms}ms.`);

    setTimeout(() => {
      resolve();
    }, ms);
  });
}

await delay(-1000);
