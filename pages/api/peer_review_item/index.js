import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import postPeerReviewItemHandler from "@/services/handlers/peer_review_item/postPeerReviewItemHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postPeerReviewItemHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
