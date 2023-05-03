import { reqLog } from "@/services/api/logger";
import getCoordinatorsHandler from "@/services/handlers/coordinator/getCoordinatorsHandler";
import postCoordinatorHandler from "@/services/handlers/coordinator/postCoordinatorHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getCoordinatorsHandler(req, res);
      case "POST":
        return postCoordinatorHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
