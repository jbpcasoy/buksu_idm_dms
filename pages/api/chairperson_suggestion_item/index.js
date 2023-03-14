import { reqLog } from "@/services/api/logger";
import getChairpersonSuggestionItemsHandler from "@/services/handlers/chairperson_suggestion_item/getChairpersonSuggestionItemsHandler";
import postChairpersonSuggestionItemHandler from "@/services/handlers/chairperson_suggestion_item/postChairpersonSuggestionItemHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postChairpersonSuggestionItemHandler(req, res);
    case "GET":
      return getChairpersonSuggestionItemsHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
