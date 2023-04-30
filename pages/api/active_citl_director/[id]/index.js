import { reqLog } from "@/services/api/logger";
import deleteActiveCITLDirectorHandler from "@/services/handlers/active_citl_director/deleteActiveCITLDirectorHandler";
import getActiveCITLDirectorHandler from "@/services/handlers/active_citl_director/getActiveCITLDirectorHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getActiveCITLDirectorHandler(req, res);
      case "DELETE":
        return deleteActiveCITLDirectorHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
