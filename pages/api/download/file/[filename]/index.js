import { reqLog } from "@/services/api/logger";
import fs from "fs";
import { promisify } from "util";

const readFile = promisify(fs.readFile);

export default async function handler(req, res) {
  await reqLog(req, res);
  const { filename } = req.query;

  try {
    const file = await readFile(`${process.cwd()}/uploads/file/${filename}`);
    res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
    res.statusCode = 200;
    res.end(file);
  } catch (error) {
    throw error;
  }
}
