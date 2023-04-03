import { reqLog } from "@/services/api/logger";
import postIMDCoordinatorSuggestionItemHandler from "@/services/handlers/im_coordinator_suggestion_item/postIMDCoordinatorSuggestionItemHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postIMDCoordinatorSuggestionItemHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
