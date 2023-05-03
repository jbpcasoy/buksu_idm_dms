import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import deleteReviewItemHandler from "@/services/handlers/peer_review_item/deleteReviewItemHandler";
import getPeerReviewItemHandler from "@/services/handlers/peer_review_item/getPeerReviewItemHandler";
import putReviewItemHandler from "@/services/handlers/peer_review_item/putReviewItemHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getPeerReviewItemHandler(req, res);
      case "PUT":
        return putReviewItemHandler(req, res);
      case "DELETE":
        return deleteReviewItemHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
