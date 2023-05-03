import { reqLog } from "@/services/api/logger";
import deleteCoordinatorEndorsementHandler from "@/services/handlers/coordinator_endorsement/deleteCoordinatorEndorsementHandler";
import getCoordinatorEndorsementHandler from "@/services/handlers/coordinator_endorsement/getCoordinatorEndorsementHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getCoordinatorEndorsementHandler(req, res);
      case "DELETE":
        return deleteCoordinatorEndorsementHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
