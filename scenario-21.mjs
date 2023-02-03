// async/await
//
// 🔥 Crashes the program: Failure to await promise like object in line 15

const number = await 5;
console.log(number);

const array = await [1, 2, 3];
console.log(array);

const object = await { prop: true };
console.log(object);

// Crashes the process without an error message!
const EurUsdExchangeRateCalculator = await {
  then: (eur) => eur * 1.15,
  now: (eur) => eur * 1.06,
};
console.log(EurUsdExchangeRateCalculator);
