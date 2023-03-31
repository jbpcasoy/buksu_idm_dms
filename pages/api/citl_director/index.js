import { reqLog } from "@/services/api/logger";
import getCITLDirectorsHandler from "@/services/handlers/citl_director/getCITLDirectorsHandler";
import postCITLDirectorHandler from "@/services/handlers/citl_director/postCITLDirectorHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postCITLDirectorHandler(req, res);
    case "GET":
      return getCITLDirectorsHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
