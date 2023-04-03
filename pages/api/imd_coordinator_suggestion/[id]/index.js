import { reqLog } from "@/services/api/logger";
import getIMDCoordinatorSuggestionHandler from "@/services/handlers/imd_coordinator_suggestion/getIMDCoordinatorSuggestionHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getIMDCoordinatorSuggestionHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
