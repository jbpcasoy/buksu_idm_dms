import { reqLog } from "@/services/api/logger";
import getExportUserHandler from "@/services/handlers/export/getExportUserHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getExportUserHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
