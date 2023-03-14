import { reqLog } from "@/services/api/logger";
import getCoordinatorSuggestionHandler from "@/services/handlers/coordinator_suggestion/getCoordinatorSuggestionHandler";
import postCoordinatorSuggestionHandler from "@/services/handlers/coordinator_suggestion/postCoordinatorSuggestionHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postCoordinatorSuggestionHandler(req, res);
    case "GET":
      return getCoordinatorSuggestionHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
