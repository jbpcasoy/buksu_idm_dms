import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getNotificationsHandler from "@/services/handlers/notification/getNotificationsHandler";

export default async function handler(req, res) {
  await reqLog(req, res);
  switch (req.method) {
    case "GET":
      return getNotificationsHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
