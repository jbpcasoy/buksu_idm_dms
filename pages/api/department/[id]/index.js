import deleteDepartmentHandler from "@/services/api/department/deleteDepartmentHandler";
import { reqLog } from "@/services/api/logger";
import getDepartmentHandler from "@/services/handlers/department/getDepartmentHandler";
import putDepartmentHandler from "@/services/handlers/department/putDepartmentHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getDepartmentHandler(req, res);
    case "PUT":
      return putDepartmentHandler(req, res);
    case "DELETE":
      return deleteDepartmentHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
