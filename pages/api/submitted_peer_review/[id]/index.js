import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import deleteSubmittedPeerReviewHandler from "@/services/handlers/submitted_peer_review/deleteSubmittedPeerReviewHandler";
import getSubmittedPeerReviewHandler from "@/services/handlers/submitted_peer_review/getSubmittedPeerReviewHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getSubmittedPeerReviewHandler(req, res);
      case "DELETE":
        return deleteSubmittedPeerReviewHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
