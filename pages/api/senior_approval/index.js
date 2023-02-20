import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getSeniorApprovalsHandler from "@/services/handlers/senior_approval/getSeniorApprovalsHandler";
import postSeniorApprovalHandler from "@/services/handlers/senior_approval/postSeniorApprovalHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getSeniorApprovalsHandler(req, res);
    case "POST":
      return postSeniorApprovalHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
