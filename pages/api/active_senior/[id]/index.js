import { reqLog } from "@/services/api/logger";
import deleteActiveSeniorHandler from "@/services/handlers/active_senior/deleteActiveSeniorHandler.";
import getActiveSeniorHandler from "@/services/handlers/active_senior/getActiveSeniorHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getActiveSeniorHandler(req, res);
    case "DELETE":
      return deleteActiveSeniorHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
