import fs from "fs";
import { promisify } from "util";

export default async function localDownloadFile({ path }) {
  try {
    // read from local
    const readFile = promisify(fs.readFile);
    const file = await readFile(`${process.cwd()}/${path}`);
    return file;
  } catch (error) {
    throw error;
  }
}
