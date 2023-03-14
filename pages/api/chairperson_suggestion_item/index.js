import { reqLog } from "@/services/api/logger";
import getChairpersonSuggestionItem from "@/services/handlers/chairperson_suggestion_item/getChairpersonSuggestionItem";
import postChairpersonSuggestionItemHandler from "@/services/handlers/chairperson_suggestion_item/postChairpersonSuggestionItemHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postChairpersonSuggestionItemHandler(req, res);
    case "GET":
      return getChairpersonSuggestionItem(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
