import { reqLog } from "@/services/api/logger";
import fs from "fs";
import { promisify } from "util";

const readFile = promisify(fs.readFile);

export default async function handler(req, res) {
  reqLog(req, res);
  const { filename } = req.query;

  try {
    const file = await readFile(`${process.cwd()}/uploads/im/${filename}`);
    res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
    res.statusCode = 200;
    res.end(file);
  } catch (err) {
    res.statusCode = 500;
    res.end(err.message);
  }
}
