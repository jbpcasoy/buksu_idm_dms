import { reqLog } from "@/services/api/logger";
import getActiveIMDCoordinatorsHandler from "@/services/handlers/active_imd_coordinator/getActiveIMDCoordinatorsHandler";
import postActiveIMDCoordinatorHandler from "@/services/handlers/active_imd_coordinator/postActiveIMDCoordinatorHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postActiveIMDCoordinatorHandler(req, res);
    case "GET":
      return getActiveIMDCoordinatorsHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
