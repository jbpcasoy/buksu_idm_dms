import { reqLog } from "@/services/api/logger";
import getSettings from "@/services/handlers/settings/getSettings";
import putSettings from "@/services/handlers/settings/putSettings";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "PUT":
        return putSettings(req, res);
      case "GET":
        return getSettings(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
