import chalk from "chalk";
import PromiseBar from "promise.bar";
PromiseBar.enable();

export default {
  all: (...args) =>
    PromiseBar.all(...args, {
      label: chalk.blue("Uploading"),
      barFormat: chalk.dim.blue,
    }),
};
