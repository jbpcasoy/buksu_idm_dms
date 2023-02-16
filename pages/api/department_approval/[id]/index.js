import { reqLog } from "@/services/api/logger";
import deleteDepartmentApprovalHandler from "@/services/handlers/department_approval/deleteDepartmentApprovalHandler";
import getDepartmentApprovalHandler from "@/services/handlers/department_approval/getDepartmentApprovalHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getDepartmentApprovalHandler(req, res);
    case "DELETE":
      return deleteDepartmentApprovalHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
