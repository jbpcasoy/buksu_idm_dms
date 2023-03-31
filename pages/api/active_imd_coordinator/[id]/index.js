import { reqLog } from "@/services/api/logger";
import deleteActiveIMDCoordinatorHandler from "@/services/handlers/active_imd_coordinator/deleteActiveIMDCoordinatorHandler";
import getActiveIMDCoordinatorHandler from "@/services/handlers/active_imd_coordinator/getActiveIMDCoordinatorHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getActiveIMDCoordinatorHandler(req, res);
    case "DELETE":
      return deleteActiveIMDCoordinatorHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
