import { reqLog } from "@/services/api/logger";
import getIMDCoordinatorsHandler from "@/services/handlers/imd_coordinator/getIMDCoordinatorsHandler";
import postIMDCoordinatorHandler from "@/services/handlers/imd_coordinator/postIMDCoordinatorHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "POST":
        return postIMDCoordinatorHandler(req, res);
      case "GET":
        return getIMDCoordinatorsHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
