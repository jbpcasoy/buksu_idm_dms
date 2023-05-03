import { reqLog } from "@/services/api/logger";
import getAnnouncementsHandler from "@/services/handlers/announcement/getAnnouncementsHandler";
import postAnnouncementHandler from "@/services/handlers/announcement/postAnnouncementHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getAnnouncementsHandler(req, res);
      case "POST":
        return postAnnouncementHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
