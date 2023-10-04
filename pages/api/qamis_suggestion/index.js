import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getQamisSuggestionsHandler from "@/services/handlers/qamis_suggestion/getQamisSuggestionsHandler";
import postQamisSuggestionHandler from "@/services/handlers/qamis_suggestion/postQamisSuggestionHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "POST":
        return postQamisSuggestionHandler(req, res);
        case "GET":
          return getQamisSuggestionsHandler(req, res); // TODO implement
      default:
        return methodNaHandler(req, res);
    }
  });
}
