import { reqLog } from "@/services/api/logger";
import getActiveChairpersonsHandler from "@/services/handlers/active_chairperson/getActiveChairpersonsHandler";
import postActiveChairpersonHandler from "@/services/handlers/active_chairperson/postActiveChairpersonHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getActiveChairpersonsHandler(req, res);
    case "POST":
      return postActiveChairpersonHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
