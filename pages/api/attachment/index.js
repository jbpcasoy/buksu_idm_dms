import { reqLog } from "@/services/api/logger";
import getAttachmentHandler from "@/services/handlers/attachment/getAttachmentHandler";
import postAttachmentHandler from "@/services/handlers/attachment/postAttachmentHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "POST":
        return postAttachmentHandler(req, res);
      case "GET":
        return getAttachmentHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
