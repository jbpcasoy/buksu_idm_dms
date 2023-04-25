import { reqLog } from "@/services/api/logger";
import deleteFileHandler from "@/services/handlers/file/deleteFileHandler";
import getFileHandler from "@/services/handlers/file/getFileHandler";
import putFileHandler from "@/services/handlers/file/putFileHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getFileHandler(req, res);
      case "DELETE":
        return deleteFileHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
