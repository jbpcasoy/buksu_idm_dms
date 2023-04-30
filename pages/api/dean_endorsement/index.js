import { reqLog } from "@/services/api/logger";
import getDeanEndorsementsHandler from "@/services/handlers/dean_endorsement/getDeanEndorsementsHandler";
import postDeanEndorsementHandler from "@/services/handlers/dean_endorsement/postDeanEndorsementHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "POST":
        return postDeanEndorsementHandler(req, res);
      case "GET":
        return getDeanEndorsementsHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
