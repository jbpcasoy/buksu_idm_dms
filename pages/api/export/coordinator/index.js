import { reqLog } from "@/services/api/logger";
import getExportChairpersonHandler from "@/services/handlers/export/getExportChairpersonHandler";
import getExportCoordinatorHandler from "@/services/handlers/export/getExportCoordinatorHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getExportCoordinatorHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
