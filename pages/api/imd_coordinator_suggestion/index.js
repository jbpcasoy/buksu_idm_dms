import { reqLog } from "@/services/api/logger";
import postIMDCoordinatorSuggestionHandler from "@/services/handlers/imd_coordinator_suggestion/postIMDCoordinatorSuggestionHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postIMDCoordinatorSuggestionHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
