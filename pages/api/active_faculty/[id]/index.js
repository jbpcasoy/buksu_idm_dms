import { reqLog } from "@/services/api/logger";
import deleteActiveFacultyHandler from "@/services/handlers/active_faculty/deleteActiveFacultyHandler";
import getActiveFacultyHandler from "@/services/handlers/active_faculty/getActiveFacultyHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getActiveFacultyHandler(req, res);
    case "DELETE":
      return deleteActiveFacultyHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
