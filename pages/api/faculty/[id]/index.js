import { reqLog } from "@/services/api/logger";
import deleteFacultyHandler from "@/services/handlers/faculty/deleteFacultyHandler";
import getFacultyHandler from "@/services/handlers/faculty/getFacultyHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getFacultyHandler(req, res);
    case "DELETE":
      return deleteFacultyHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
