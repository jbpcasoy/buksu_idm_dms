import { reqLog } from "@/services/api/logger";
import getIMDCoordinatorEndorsement from "@/services/handlers/imd_coordinator_endorsement/getIMDCoordinatorEndorsement";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getIMDCoordinatorEndorsement(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
