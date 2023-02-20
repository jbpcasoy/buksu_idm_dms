import { reqLog } from "@/services/api/logger";
import deleteChairpersonApprovalHandler from "@/services/handlers/chairperson_approval/deleteChairpersonApprovalHandler";
import getChairpersonApprovalHandler from "@/services/handlers/chairperson_approval/getChairpersonApprovalHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getChairpersonApprovalHandler(req, res);
    case "DELETE":
      return deleteChairpersonApprovalHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
