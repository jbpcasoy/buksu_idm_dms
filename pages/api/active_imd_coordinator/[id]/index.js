import { reqLog } from "@/services/api/logger";
import getActiveIMDCoordinatorHandler from "@/services/handlers/active_imd_coordinator/getActiveIMDCoordinatorHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getActiveIMDCoordinatorHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
