// Bonus: TypeScript
//
// 🚫 Not recommended: Async functions must have a Promise<T> return type (L12)

// You can use the Promise<T> type for promises
async function fetchTemperature(): Promise<string> {
  // ...
  return "It's hot-ish 🌴";
}

// @ts-expect-error async functions MUST return a Promise<T> type
async function fetchTemperatureWrong(): string {
  return "It's cold-ish 🐧";
}

async function passthroughValue<T>(value: T) {
  return value;
}

// TypeScript correctly infers types from Promise methods
async function inferenceTest() {
  const [a, b] = await Promise.all([
    passthroughValue("string"),
    passthroughValue(123),
  ]);
}

const temperaturePromise = fetchTemperature();
// Promises can be unwrapped with the "Awaited type"
let temperatureResult: Awaited<typeof temperaturePromise>;
