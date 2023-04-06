import { reqLog } from "@/services/api/logger";
import getIMEventHandler from "@/services/handlers/im_event/getIMEventHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getIMEventHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
