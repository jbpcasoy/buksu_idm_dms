import { reqLog } from "@/services/api/logger";
import getCoordinatorSuggestionsHandler from "@/services/handlers/coordinator_suggestion/getCoordinatorSuggestionsHandler";
import postCoordinatorSuggestionHandler from "@/services/handlers/coordinator_suggestion/postCoordinatorSuggestionHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postCoordinatorSuggestionHandler(req, res);
    case "GET":
      return getCoordinatorSuggestionsHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
