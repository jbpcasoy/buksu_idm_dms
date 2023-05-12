import { reqLog } from "@/services/api/logger";
import getExportCITLDirectorHandler from "@/services/handlers/export/getExportCITLDirectorHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getExportCITLDirectorHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
