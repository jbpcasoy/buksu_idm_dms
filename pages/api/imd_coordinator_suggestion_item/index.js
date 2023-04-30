import { reqLog } from "@/services/api/logger";
import getIMDCoordinatorSuggestionItemsHandler from "@/services/handlers/imd_coordinator_suggestion_item/getIMDCoordinatorSuggestionItemsHandler";
import postIMDCoordinatorSuggestionItemHandler from "@/services/handlers/imd_coordinator_suggestion_item/postIMDCoordinatorSuggestionItemHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "POST":
        return postIMDCoordinatorSuggestionItemHandler(req, res);
      case "GET":
        return getIMDCoordinatorSuggestionItemsHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
