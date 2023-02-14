import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getUserHandler from "@/services/handlers/user/getUserHandler";
import putUserHandler from "@/services/handlers/user/putUserHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getUserHandler(req, res);
    case "PUT":
      return putUserHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
