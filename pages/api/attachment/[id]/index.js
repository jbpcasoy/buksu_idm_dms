import { reqLog } from "@/services/api/logger";
import deleteAttachmentHandler from "@/services/handlers/attachment/deleteAttachmentHandler";
import getAttachmentsHandler from "@/services/handlers/attachment/getAttachmentsHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getAttachmentsHandler(req, res);
      case "DELETE":
        return deleteAttachmentHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
