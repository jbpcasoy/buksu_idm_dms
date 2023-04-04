import { reqLog } from "@/services/api/logger";
import getCITLDirectorEndorsementsHandler from "@/services/handlers/citl_director_endorsement/getCITLDirectorEndorsementsHandler";
import postCITLDirectorEndorsementHandler from "@/services/handlers/citl_director_endorsement/postCITLDirectorEndorsementHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postCITLDirectorEndorsementHandler(req, res);
    case "GET":
      return getCITLDirectorEndorsementsHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
