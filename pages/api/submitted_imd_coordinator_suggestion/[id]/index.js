import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import deleteIMDSubmittedCoordinatorSuggestionHandler from "@/services/handlers/submitted_imd_coordinator_suggestion/deleteIMDSubmittedCoordinatorSuggestionHandler";
import getSubmittedIMDCoordinatorSuggestionHandler from "@/services/handlers/submitted_imd_coordinator_suggestion/getSubmittedIMDCoordinatorSuggestionHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getSubmittedIMDCoordinatorSuggestionHandler(req, res);
      case "DELETE":
        return deleteIMDSubmittedCoordinatorSuggestionHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
