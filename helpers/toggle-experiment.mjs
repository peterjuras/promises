import { delay } from "./delay.mjs";

export async function toggleExperiment(experiment) {
  const onOff = Math.random() < 0.5 ? "on" : "off";
  console.log(`Turning experiment ${experiment} ${onOff}`);
  await delay(1000);
}
