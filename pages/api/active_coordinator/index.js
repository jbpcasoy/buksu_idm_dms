import { reqLog } from "@/services/api/logger";
import getActiveCoordinators from "@/services/handlers/active_coordinator/getActiveCoordinators";
import postActiveCoordinatorHandler from "@/services/handlers/active_coordinator/postActiveCoordinatorHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postActiveCoordinatorHandler(req, res);
    case "GET":
      return getActiveCoordinators(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
