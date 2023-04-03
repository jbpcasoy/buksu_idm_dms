import { reqLog } from "@/services/api/logger";
import postCITLDirectorEndorsementHandler from "@/services/handlers/citl_director_endorsement/postCITLDirectorEndorsementHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postCITLDirectorEndorsementHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
