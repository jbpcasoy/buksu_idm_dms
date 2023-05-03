import { reqLog } from "@/services/api/logger";
import deleteChairpersonSuggestionItemHandler from "@/services/handlers/chairperson_suggestion_item/deleteChairpersonSuggestionItemHandler";
import getChairpersonSuggestionItemHandler from "@/services/handlers/chairperson_suggestion_item/getChairpersonSuggestionItemHandler";
import putChairpersonSuggestionItemHandler from "@/services/handlers/chairperson_suggestion_item/putChairpersonSuggestionItemHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getChairpersonSuggestionItemHandler(req, res);
      case "PUT":
        return putChairpersonSuggestionItemHandler(req, res);
      case "DELETE":
        return deleteChairpersonSuggestionItemHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
