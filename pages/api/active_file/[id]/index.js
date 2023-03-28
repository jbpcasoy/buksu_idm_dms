import { reqLog } from "@/services/api/logger";
import deleteActiveFileHandler from "@/services/handlers/active_file/deleteActiveFileHandler";
import getActiveFileHandler from "@/services/handlers/active_file/getActiveFileHandler";
import putActiveFileHandler from "@/services/handlers/active_file/putActiveFileHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getActiveFileHandler(req, res);
    case "PUT":
      return putActiveFileHandler(req, res);
    case "DELETE":
      return deleteActiveFileHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
