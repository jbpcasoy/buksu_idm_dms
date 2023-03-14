import { reqLog } from "@/services/api/logger";
import postCoordinatorSuggestionItemHandler from "@/services/handlers/coordinator_suggestion_item/postCoordinatorSuggestionItemHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postCoordinatorSuggestionItemHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
