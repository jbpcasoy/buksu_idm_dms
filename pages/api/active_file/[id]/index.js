import { reqLog } from "@/services/api/logger";
import deleteActiveFileHandler from "@/services/handlers/active_file/deleteActiveFileHandler";
import getActiveFileHandler from "@/services/handlers/active_file/getActiveFileHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getActiveFileHandler(req, res);
    case "DELETE":
      return deleteActiveFileHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
