import { reqLog } from "@/services/api/logger";
import loginRoleHandler from "@/services/handlers/login_role/signInHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);
  switch (req.method) {
    case "GET":
      return loginRoleHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
