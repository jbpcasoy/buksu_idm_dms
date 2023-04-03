import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getSubmittedIMDCoordinatorSuggestionHandler from "@/services/handlers/submitted_imd_coordinator_suggestion/getSubmittedIMDCoordinatorSuggestionHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getSubmittedIMDCoordinatorSuggestionHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
