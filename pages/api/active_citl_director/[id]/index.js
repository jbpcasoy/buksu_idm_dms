import { reqLog } from "@/services/api/logger";
import getActiveCITLDirectorHandler from "@/services/handlers/active_citl_director/getActiveCITLDirectorHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getActiveCITLDirectorHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
