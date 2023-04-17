import { reqLog } from "@/services/api/logger";
import deleteCITLDirectorEndorsementHandler from "@/services/handlers/citl_director_endorsement/deleteCITLDirectorEndorsementHandler";
import getCITLDirectorEndorsementHandler from "@/services/handlers/citl_director_endorsement/getCITLDirectorEndorsementHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getCITLDirectorEndorsementHandler(req, res);
      case "DELETE":
        return deleteCITLDirectorEndorsementHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
