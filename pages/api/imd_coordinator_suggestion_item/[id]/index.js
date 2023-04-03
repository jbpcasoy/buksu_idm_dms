import { reqLog } from "@/services/api/logger";
import getIMDCoordinatorSuggestionItemHandler from "@/services/handlers/imd_coordinator_suggestion_item/getIMDCoordinatorSuggestionItemHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);
  switch (req.method) {
    case "GET":
      return getIMDCoordinatorSuggestionItemHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
