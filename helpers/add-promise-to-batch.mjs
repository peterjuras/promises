import cliProgress from "cli-progress";
import chalk from "chalk";

const bar = new cliProgress.SingleBar(
  {
    hideCursor: true,
    format:
      chalk.blue("Uploading | ") +
      chalk.dim.blue("{bar}") +
      chalk.blue(" | {value}/{total}"),
  },
  cliProgress.Presets.shades_grey
);
bar.start(100, 0);

export function addPromiseToBatch(promises, promise, index, item) {
  const wrappedPromise = promise.then((result) => {
    bar.increment();
    let pIndex = promises.indexOf(wrappedPromise);
    promises.splice(pIndex, 1);
    return {
      result,
      index,
    };
  });
  promises.push(wrappedPromise);
}

export function finished() {
  bar.stop();
}
