import { reqLog } from "@/services/api/logger";
import getCITLDirectorHandler from "@/services/handlers/citl_director/getCITLDirectorHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getCITLDirectorHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
