import { reqLog } from "@/services/api/logger";
import deleteChairpersonHandler from "@/services/handlers/chairperson/deleteChairpersonHandler";
import getChairpersonHandler from "@/services/handlers/chairperson/getChairpersonHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getChairpersonHandler(req, res);
    case "DELETE":
      return deleteChairpersonHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
