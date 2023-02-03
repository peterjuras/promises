// Special Promise functions
// Promise.resolve & Promise.reject
//
// 🚫 Not recommended: Prefer async functions over Promise.resolve & Promise.reject values

async function getPromisedNumberAsync() {
  return 5;
}

// equals:

function getPromisedNumber() {
  return Promise.resolve(5);
}

// Rejecting
async function throwingFunctionAsync() {
  throw new Error("Error!");
}

// equals:

function throwingFunction() {
  return Promise.reject(new Error("Error!"));
}

console.log(await getPromisedNumberAsync());
console.log(await getPromisedNumber());

try {
  await throwingFunctionAsync();
} catch (error) {
  console.error(error.message);
}

try {
  await throwingFunction();
} catch (error) {
  console.error(error.message);
}
