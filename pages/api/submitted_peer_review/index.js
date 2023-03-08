import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getSubmittedPeerReviewsHandler from "@/services/handlers/submitted_peer_review/getSubmittedPeerReviewsHandler";
import postSubmittedPeerReviewHandler from "@/services/handlers/submitted_peer_review/postSubmittedPeerReviewHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postSubmittedPeerReviewHandler(req, res);
    case "GET":
      return getSubmittedPeerReviewsHandler(req, res);
    default:
      methodNaHandler(req, res);
  }
}
