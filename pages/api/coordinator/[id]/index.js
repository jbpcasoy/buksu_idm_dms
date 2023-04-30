import { reqLog } from "@/services/api/logger";
import deleteCoordinatorHandler from "@/services/handlers/coordinator/deleteCoordinatorHandler";
import getCoordinatorHandler from "@/services/handlers/coordinator/getCoordinatorHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getCoordinatorHandler(req, res);
      case "DELETE":
        return deleteCoordinatorHandler(req, res);
      default:
        methodNaHandler(req, res);
    }
  });
}
