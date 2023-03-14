import { reqLog } from "@/services/api/logger";
import getChairpersonSuggestionItemHandler from "@/services/handlers/chairperson_suggestion_item/getChairpersonSuggestionItemHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getChairpersonSuggestionItemHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
