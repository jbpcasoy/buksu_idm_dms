import fs from "fs";
import { promisify } from "util";

export default async function localDownloadFile({ path }) {
  // read from local
  const readFile = promisify(fs.readFile);
  const file = await readFile(`${process.cwd()}/${path}`);
  return file;
}
