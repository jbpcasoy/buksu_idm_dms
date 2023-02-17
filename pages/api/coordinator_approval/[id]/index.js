import { reqLog } from "@/services/api/logger";
import deleteCoordinatorApprovalHandler from "@/services/handlers/coordinator_approval/deleteCoordinatorApprovalHandler";
import getCoordinatorApprovalHandler from "@/services/handlers/coordinator_approval/getCoordinatorApprovalHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getCoordinatorApprovalHandler(req, res);
    case "DELETE":
      return deleteCoordinatorApprovalHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
