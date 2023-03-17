import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import postReadNotificationHandler from "@/services/handlers/read_notification/postReadNotificationHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postReadNotificationHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
