import PromiseBar from "promise.bar";
import { delay } from "./delay.mjs";

export async function uploadFile(file) {
  const type = file.delay === 1000 ? "photo" : "video";
  await delay(file.delay);
}
