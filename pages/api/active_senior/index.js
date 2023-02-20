import { reqLog } from "@/services/api/logger";
import getActiveSeniorsHandler from "@/services/handlers/active_senior/getActiveSeniorsHandler";
import postActiveSeniorHandler from "@/services/handlers/active_senior/postActiveSeniorHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postActiveSeniorHandler(req, res);
    case "GET":
      return getActiveSeniorsHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
