import { reqLog } from "@/services/api/logger";
import postIMDCoordinatorEndorsementHandler from "@/services/handlers/imd_coordinator_endorsement";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postIMDCoordinatorEndorsementHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
