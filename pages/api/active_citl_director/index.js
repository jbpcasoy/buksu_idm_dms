import { reqLog } from "@/services/api/logger";
import postActiveCITLDirectorHandler from "@/services/handlers/active_citl_director/postActiveCITLDirectorHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postActiveCITLDirectorHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
