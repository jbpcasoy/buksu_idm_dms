import { reqLog } from "@/services/api/logger";
import getActiveFilesHandler from "@/services/handlers/active_file/getActiveFilesHandler";
import postActiveFileHandler from "@/services/handlers/active_file/postActiveFileHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "POST":
        return postActiveFileHandler(req, res);
      case "GET":
        return getActiveFilesHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
