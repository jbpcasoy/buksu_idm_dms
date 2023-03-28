import { reqLog } from "@/services/api/logger";
import getActiveDeanHandler from "@/services/handlers/active_dean/getActiveDeanHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getActiveDeanHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
