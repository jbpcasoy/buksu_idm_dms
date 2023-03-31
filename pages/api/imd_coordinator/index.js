import { reqLog } from "@/services/api/logger";
import getIMDCoordinatorHandler from "@/services/handlers/imd_coordinator/getIMDCoordinatorHandler";
import postIMDCoordinatorHandler from "@/services/handlers/imd_coordinator/postIMDCoordinatorHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postIMDCoordinatorHandler(req, res);
    case "GET":
      return getIMDCoordinatorHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
