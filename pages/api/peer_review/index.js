import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import postPeerReviewHandler from "@/services/handlers/peer_review/postPeerReviewHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postPeerReviewHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
