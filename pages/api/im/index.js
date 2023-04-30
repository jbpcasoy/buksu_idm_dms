import { reqLog } from "@/services/api/logger";
import getImsHandler from "@/services/handlers/im/getImsHandler";
import postImHandler from "@/services/handlers/im/postImHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getImsHandler(req, res);
      case "POST":
        return postImHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
