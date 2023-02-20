import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import deleteSeniorApprovalHandler from "@/services/handlers/senior_approval/deleteSeniorApprovalHandler";
import getSeniorApprovalHandler from "@/services/handlers/senior_approval/getSeniorApprovalHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getSeniorApprovalHandler(req, res);
    case "DELETE":
      return deleteSeniorApprovalHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
