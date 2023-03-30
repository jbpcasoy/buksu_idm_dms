import { reqLog } from "@/services/api/logger";
import deleteDeanEndorsementHandler from "@/services/handlers/dean_endorsement/deleteDeanEndorsementHandler";
import getDeanEndorsementHandler from "@/services/handlers/dean_endorsement/getDeanEndorsementHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getDeanEndorsementHandler(req, res);
    case "DELETE":
      return deleteDeanEndorsementHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
