import { reqLog } from "@/services/api/logger";
import getFacultiesHandler from "@/services/handlers/faculty/getFacultiesHandler";
import postFacultyHandler from "@/services/handlers/faculty/postFacultyHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getFacultiesHandler(req, res);
    case "POST":
      return postFacultyHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
