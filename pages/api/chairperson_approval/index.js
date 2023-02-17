import { reqLog } from "@/services/api/logger";
import getChairpersonApprovalsHandler from "@/services/handlers/chairperson_approval/getChairpersonApprovalsHandler";
import postChairpersonApprovalHandler from "@/services/handlers/chairperson_approval/postChairpersonApprovalHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getChairpersonApprovalsHandler(req, res);
    case "POST":
      return postChairpersonApprovalHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
