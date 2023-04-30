import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import deleteSubmittedCoordinatorSuggestionHandler from "@/services/handlers/submitted_coordinator_suggestion/deleteSubmittedCoordinatorSuggestionHandler";
import getSubmittedCoordinatorSuggestionHandler from "@/services/handlers/submitted_coordinator_suggestion/getSubmittedCoordinatorSuggestionHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getSubmittedCoordinatorSuggestionHandler(req, res);
      case "DELETE":
        return deleteSubmittedCoordinatorSuggestionHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
