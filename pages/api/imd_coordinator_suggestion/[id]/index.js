import { reqLog } from "@/services/api/logger";
import deleteIMDCoordinatorSuggestionHandler from "@/services/handlers/imd_coordinator_suggestion/deleteIMDCoordinatorSuggestionHandler";
import getIMDCoordinatorSuggestionHandler from "@/services/handlers/imd_coordinator_suggestion/getIMDCoordinatorSuggestionHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getIMDCoordinatorSuggestionHandler(req, res);
      case "DELETE":
        return deleteIMDCoordinatorSuggestionHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
