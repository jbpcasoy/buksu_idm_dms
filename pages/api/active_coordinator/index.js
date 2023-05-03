import { reqLog } from "@/services/api/logger";
import getActiveCoordinatorsHandler from "@/services/handlers/active_coordinator/getActiveCoordinatorsHandler";
import postActiveCoordinatorHandler from "@/services/handlers/active_coordinator/postActiveCoordinatorHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "POST":
        return postActiveCoordinatorHandler(req, res);
      case "GET":
        return getActiveCoordinatorsHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
