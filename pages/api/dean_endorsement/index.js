import { reqLog } from "@/services/api/logger";
import postDeanEndorsementHandler from "@/services/handlers/dean_endorsement/postDeanEndorsementHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postDeanEndorsementHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
