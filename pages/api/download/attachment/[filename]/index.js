import { reqLog } from "@/services/api/logger";
import catchAllError from "@/services/middleware/catchAllError";
import fs from "fs";
import { promisify } from "util";

const readFile = promisify(fs.readFile);

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);
    const { filename } = req.query;

    try {
      const file = await readFile(
        `${process.cwd()}/uploads/attachment/${filename}`
      );
      res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
      res.statusCode = 200;
      res.end(file);
    } catch (error) {
      throw error;
    }
  });
}
