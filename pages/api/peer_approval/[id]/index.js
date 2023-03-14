import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import deletePeerApprovalHandler from "@/services/handlers/peer_approval/deletePeerApprovalHandler";
import getPeerApprovalHandler from "@/services/handlers/peer_approval/getPeerApprovalHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getPeerApprovalHandler(req, res);
    case "DELETE":
      return deletePeerApprovalHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
