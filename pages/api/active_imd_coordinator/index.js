import { reqLog } from "@/services/api/logger";
import getActiveIMDCoordinatorsHandler from "@/services/handlers/active_imd_coordinator/getActiveIMDCoordinatorsHandler";
import postActiveIMDCoordinatorHandler from "@/services/handlers/active_imd_coordinator/postActiveIMDCoordinatorHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "POST":
        return postActiveIMDCoordinatorHandler(req, res);
      case "GET":
        return getActiveIMDCoordinatorsHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
