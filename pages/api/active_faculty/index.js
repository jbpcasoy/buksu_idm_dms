import { reqLog } from "@/services/api/logger";
import getActiveFacultiesHandler from "@/services/handlers/active_faculty/getActiveFacultiesHandler";
import postActiveFacultyHandler from "@/services/handlers/active_faculty/postActiveFacultyHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getActiveFacultiesHandler(req, res);
      case "POST":
        return postActiveFacultyHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
