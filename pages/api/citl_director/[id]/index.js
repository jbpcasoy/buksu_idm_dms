import { reqLog } from "@/services/api/logger";
import deleteCITLDirectorHandler from "@/services/handlers/citl_director/deleteCITLDirectorHandler";
import getCITLDirectorHandler from "@/services/handlers/citl_director/getCITLDirectorHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getCITLDirectorHandler(req, res);
      case "DELETE":
        return deleteCITLDirectorHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
