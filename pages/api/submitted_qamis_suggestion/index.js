import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
// import getSubmittedQamisSuggestionsHandler from "@/services/handlers/submitted_qamis_suggestion/getSubmittedQamisSuggestionsHandler";
import postSubmittedQamisSuggestionHandler from "@/services/handlers/submitted_qamis_suggestion/postSubmittedQamisSuggestionHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);
    switch (req.method) {
      case "POST":
        return postSubmittedQamisSuggestionHandler(req, res);
      case "GET":
        // return getSubmittedQamisSuggestionsHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
