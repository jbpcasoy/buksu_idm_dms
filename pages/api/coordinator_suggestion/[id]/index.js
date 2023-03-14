import { reqLog } from "@/services/api/logger";
import deleteCoordinatorSuggestionHandler from "@/services/handlers/coordinator_suggestion/deleteCoordinatorSuggestionHandler";
import getCoordinatorSuggestionHandler from "@/services/handlers/coordinator_suggestion/getCoordinatorSuggestionHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getCoordinatorSuggestionHandler(req, res);
    case "DELETE":
      return deleteCoordinatorSuggestionHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
