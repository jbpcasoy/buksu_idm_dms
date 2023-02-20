import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import deleteSeniorHandler from "@/services/handlers/senior/deleteSeniorHandler";
import getSeniorHandler from "@/services/handlers/senior/getSeniorHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getSeniorHandler(req, res);
    case "DELETE":
      return deleteSeniorHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
