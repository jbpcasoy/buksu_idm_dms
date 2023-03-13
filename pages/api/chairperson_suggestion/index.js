import { reqLog } from "@/services/api/logger";
import postChairpersonSuggestionHandler from "@/services/handlers/chairperson_suggestion/postChairpersonSuggestionHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function (req, res) {
  reqLog(req, res);
  switch (req.method) {
    case "POST":
      return postChairpersonSuggestionHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
