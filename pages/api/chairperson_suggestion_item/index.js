import { reqLog } from "@/services/api/logger";
import postChairpersonSuggestionItemHandler from "@/services/handlers/chairperson_suggestion_item/postChairpersonSuggestionItemHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postChairpersonSuggestionItemHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
