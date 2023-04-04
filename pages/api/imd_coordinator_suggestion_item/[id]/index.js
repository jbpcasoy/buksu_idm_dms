import { reqLog } from "@/services/api/logger";
import deleteIMDCoordinatorSuggestionItemHandler from "@/services/handlers/imd_coordinator_suggestion_item/deleteIMDCoordinatorSuggestionItemHandler";
import getIMDCoordinatorSuggestionItemHandler from "@/services/handlers/imd_coordinator_suggestion_item/getIMDCoordinatorSuggestionItemHandler";
import putIMDCoordinatorSuggestionItemHandler from "@/services/handlers/imd_coordinator_suggestion_item/putIMDCoordinatorSuggestionItemHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);
  switch (req.method) {
    case "GET":
      return getIMDCoordinatorSuggestionItemHandler(req, res);
    case "PUT":
      return putIMDCoordinatorSuggestionItemHandler(req, res);
    case "DELETE":
      return deleteIMDCoordinatorSuggestionItemHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
