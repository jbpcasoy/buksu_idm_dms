import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import deleteReadNotificationHandler from "@/services/handlers/read_notification/deleteReadNotificationHandler";
import getReadNotificationHandler from "@/services/handlers/read_notification/getReadNotificationHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getReadNotificationHandler(req, res);
      case "DELETE":
        return deleteReadNotificationHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
