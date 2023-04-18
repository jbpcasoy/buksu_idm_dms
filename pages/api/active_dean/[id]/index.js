import { reqLog } from "@/services/api/logger";
import deleteActiveDeanHandler from "@/services/handlers/active_dean/deleteActiveDeanHandler";
import getActiveDeanHandler from "@/services/handlers/active_dean/getActiveDeanHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getActiveDeanHandler(req, res);
      case "DELETE":
        return deleteActiveDeanHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
