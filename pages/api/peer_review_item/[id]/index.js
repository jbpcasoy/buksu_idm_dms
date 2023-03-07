import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getPeerReviewItemHandler from "@/services/handlers/peer_review_item/getPeerReviewItemHandler";
import putReviewItemHandler from "@/services/handlers/peer_review_item/putReviewItemHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getPeerReviewItemHandler(req, res);
    case "PUT":
      return putReviewItemHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
