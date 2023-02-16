import { reqLog } from "@/services/api/logger";
import deleteActiveChairpersonHandler from "@/services/handlers/active_chairperson/deleteActiveChairpersonHandler";
import getActiveChairpersonHandler from "@/services/handlers/active_chairperson/getActiveChairpersonHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getActiveChairpersonHandler(req, res);
    case "DELETE":
      return deleteActiveChairpersonHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
