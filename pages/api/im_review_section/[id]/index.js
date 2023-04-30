import { reqLog } from "@/services/api/logger";
import deleteImReviewSectionHandler from "@/services/handlers/im_review_section/deleteImReviewSectionHandler";
import getImReviewSectionHandler from "@/services/handlers/im_review_section/getImReviewSectionHandler";
import putImReviewSectionHandler from "@/services/handlers/im_review_section/putImReviewSectionHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getImReviewSectionHandler(req, res);
      case "PUT":
        return putImReviewSectionHandler(req, res);
      case "DELETE":
        return deleteImReviewSectionHandler(req, res);
      default:
        methodNaHandler(req, res);
    }
  });
}
