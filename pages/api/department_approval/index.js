import { reqLog } from "@/services/api/logger";
import getDepartmentApprovalsHandler from "@/services/handlers/department_approval/getDepartmentApprovalsHandler";
import postDepartmentApprovalHandler from "@/services/handlers/department_approval/postDepartmentApprovalHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getDepartmentApprovalsHandler(req, res);
      case "POST":
        return postDepartmentApprovalHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
