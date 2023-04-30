import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getPeerApprovalsHandler from "@/services/handlers/peer_approval/getPeerApprovalsHandler";
import postPeerApprovalHandler from "@/services/handlers/peer_approval/postPeerApprovalHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "POST":
        return postPeerApprovalHandler(req, res);
      case "GET":
        return getPeerApprovalsHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
