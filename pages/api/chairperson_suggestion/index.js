import { reqLog } from "@/services/api/logger";
import getChairpersonSuggestionsHandler from "@/services/handlers/chairperson_suggestion/getChairpersonSuggestionsHandler";
import postChairpersonSuggestionHandler from "@/services/handlers/chairperson_suggestion/postChairpersonSuggestionHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  reqLog(req, res);
  switch (req.method) {
    case "POST":
      return postChairpersonSuggestionHandler(req, res);
    case "GET":
      return getChairpersonSuggestionsHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
