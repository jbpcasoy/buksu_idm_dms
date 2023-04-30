import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getReadNotificationsHandler from "@/services/handlers/read_notification/getReadNotificationsHandler";
import postReadNotificationHandler from "@/services/handlers/read_notification/postReadNotificationHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "POST":
        return postReadNotificationHandler(req, res);
      case "GET":
        return getReadNotificationsHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
