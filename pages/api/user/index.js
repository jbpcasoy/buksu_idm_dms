import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getUsersHandler from "@/services/handlers/user/getUsersHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getUsersHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
