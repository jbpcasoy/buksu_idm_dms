import { reqLog } from "@/services/api/logger";
import getSubmittedCoordinatorSuggestionsHandler from "@/services/api/submitted_coordinator_suggestion/getSubmittedCoordinatorSuggestionHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import postSubmittedCoordinatorSuggestionHandler from "@/services/handlers/submitted_coordinator_suggestion/postSubmittedCoordinatorSuggestionHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postSubmittedCoordinatorSuggestionHandler(req, res);
    case "GET":
      return getSubmittedCoordinatorSuggestionsHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
