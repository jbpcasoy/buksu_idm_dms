import { reqLog } from "@/services/api/logger";
import deleteDepartmentHandler from "@/services/handlers/department/deleteDepartmentHandler";
import getDepartmentHandler from "@/services/handlers/department/getDepartmentHandler";
import putDepartmentHandler from "@/services/handlers/department/putDepartmentHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
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
  });
}
