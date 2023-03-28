import { reqLog } from "@/services/api/logger";
import getCoordinatorEndorsementsHandler from "@/services/handlers/coordinator_endorsement/getCoordinatorEndorsementsHandler";
import postCoordinatorEndorsementHandler from "@/services/handlers/coordinator_endorsement/postCoordinatorEndorsementHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postCoordinatorEndorsementHandler(req, res);
    case "GET":
      return getCoordinatorEndorsementsHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
