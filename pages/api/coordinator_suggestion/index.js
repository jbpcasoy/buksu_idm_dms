import { reqLog } from "@/services/api/logger";
import postCoordinatorSuggestionHandler from "@/services/handlers/coordinator_suggestion/postCoordinatorSuggestionHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postCoordinatorSuggestionHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
