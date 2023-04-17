import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getNotificationHandler from "@/services/handlers/notification/getNotificationHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getNotificationHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
