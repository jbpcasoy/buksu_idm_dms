import { reqLog } from "@/services/api/logger";
import getIMDCoordinatorEndorsementsHandler from "@/services/handlers/imd_coordinator_endorsement/getIMDCoordinatorEndorsementsHandler";
import postIMDCoordinatorEndorsementHandler from "@/services/handlers/imd_coordinator_endorsement/postIMDCoordinatorEndorsementHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "POST":
        return postIMDCoordinatorEndorsementHandler(req, res);
      case "GET":
        return getIMDCoordinatorEndorsementsHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
