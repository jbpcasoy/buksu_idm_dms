import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getPeerReviewItemsHandler from "@/services/handlers/peer_review_item/getPeerReviewItemsHandler";
import postPeerReviewItemHandler from "@/services/handlers/peer_review_item/postPeerReviewItemHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "POST":
        return postPeerReviewItemHandler(req, res);
      case "GET":
        return getPeerReviewItemsHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
