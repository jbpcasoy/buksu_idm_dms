import { reqLog } from "@/services/api/logger";
import deleteCoordinatorSuggestionItemHandler from "@/services/handlers/coordinator_suggestion_item/deleteCoordinatorSuggestionItemHandler";
import getCoordinatorSuggestionItemHandler from "@/services/handlers/coordinator_suggestion_item/getCoordinatorSuggestionItemHandler";
import putCoordinatorSuggestionItemHandler from "@/services/handlers/coordinator_suggestion_item/putCoordinatorSuggestionItemHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getCoordinatorSuggestionItemHandler(req, res);
      case "PUT":
        return putCoordinatorSuggestionItemHandler(req, res);
      case "DELETE":
        return deleteCoordinatorSuggestionItemHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
