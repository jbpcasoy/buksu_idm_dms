import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getSeniorsHandler from "@/services/handlers/senior/getSeniorsHandler";
import postSeniorHandler from "@/services/handlers/senior/postSeniorHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postSeniorHandler(req, res);
    case "GET":
      return getSeniorsHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
