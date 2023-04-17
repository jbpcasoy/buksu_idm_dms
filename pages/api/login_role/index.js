import { reqLog } from "@/services/api/logger";
import loginRoleHandler from "@/services/handlers/login_role/signInHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);
    switch (req.method) {
      case "GET":
        return loginRoleHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
