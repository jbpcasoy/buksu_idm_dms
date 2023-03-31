import { reqLog } from "@/services/api/logger";
import postIMDCoordinatorHandler from "@/services/handlers/imd_coordinator/postIMDCoordinatorHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postIMDCoordinatorHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
