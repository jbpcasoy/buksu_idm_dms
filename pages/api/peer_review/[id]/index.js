import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getPeerReviewHandler from "@/services/handlers/peer_review/getPeerReviewHandler";
import putPeerReviewHandler from "@/services/handlers/peer_review/putPeerReviewHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getPeerReviewHandler(req, res);
    case "PUT":
      return putPeerReviewHandler(req, res);
    default:
      methodNaHandler(req, res);
  }
}
