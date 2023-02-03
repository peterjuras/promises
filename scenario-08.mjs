// Building your own promises
//
// 🔥 Crashes the program: Unhandled promise rejection in line 23

function delay(ms) {
  return new Promise((resolve, reject) => {
    if (!Number.isInteger(ms) || ms <= 0) {
      reject(new Error("ms must be a positive integer!"));
    }

    console.log(`Waiting ${ms}ms.`);

    setTimeout(() => {
      resolve();
    }, ms);
  });
}

// Works
await delay(1000);

// Crashes
await delay(-1000);
