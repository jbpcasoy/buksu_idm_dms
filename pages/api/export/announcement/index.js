import { reqLog } from "@/services/api/logger";
import getExportAnnouncementHandler from "@/services/handlers/export/getExportAnnouncementHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getExportAnnouncementHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
