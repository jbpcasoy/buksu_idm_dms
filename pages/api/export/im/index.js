import { reqLog } from "@/services/api/logger";
import getExportFacultyHandler from "@/services/handlers/export/getExportFacultyHandler";
import getExportHandler from "@/services/handlers/export/getExportHandler";
import getExportIMHandler from "@/services/handlers/export/getExportIMHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getExportIMHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
