import { reqLog } from "@/services/api/logger";
import deleteIMDCoordinatorHandler from "@/services/handlers/imd_coordinator/deleteIMDCoordinatorHandler";
import getIMDCoordinatorHandler from "@/services/handlers/imd_coordinator/getIMDCoordinatorHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getIMDCoordinatorHandler(req, res);
    case "DELETE":
      return deleteIMDCoordinatorHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
