import { reqLog } from "@/services/api/logger";
import getCoordinatorSuggestionItemsHandler from "@/services/handlers/coordinator_suggestion_item/getCoordinatorSuggestionItemsHandler";
import postCoordinatorSuggestionItemHandler from "@/services/handlers/coordinator_suggestion_item/postCoordinatorSuggestionItemHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "POST":
        return postCoordinatorSuggestionItemHandler(req, res);
      case "GET":
        return getCoordinatorSuggestionItemsHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
