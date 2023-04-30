import { reqLog } from "@/services/api/logger";
import getCoordinatorApprovalsHandler from "@/services/handlers/coordinator_approval/getCoordinatorApprovalsHandler";
import postCoordinatorApprovalHandler from "@/services/handlers/coordinator_approval/postCoordinatorApprovalHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getCoordinatorApprovalsHandler(req, res);
      case "POST":
        return postCoordinatorApprovalHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
