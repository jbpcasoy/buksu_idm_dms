import { reqLog } from "@/services/api/logger";
import deleteAnnouncementHandler from "@/services/handlers/announcement/deleteAnnouncementHandler";
import getAnnouncementHandler from "@/services/handlers/announcement/getAnnouncementHandler";
import putAnnouncementHandler from "@/services/handlers/announcement/putAnnouncementHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getAnnouncementHandler(req, res);
      case "PUT":
        return putAnnouncementHandler(req, res);
      case "DELETE":
        return deleteAnnouncementHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
