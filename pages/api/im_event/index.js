import { reqLog } from "@/services/api/logger";
import getIMEventsHandler from "@/services/handlers/im_event/getIMEventsHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getIMEventsHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
