import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import deleteQamisSuggestionItemHandler from "@/services/handlers/qamis_suggestion_item/deleteQamisSuggestionItemHandler";
import getQamisSuggestionItemHandler from "@/services/handlers/qamis_suggestion_item/getQamisSuggestionItemHandler";
// import putQamisSuggestionItemHandler from "@/services/handlers/qamis_suggestion_item/putQamisSuggestionItemHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getQamisSuggestionItemHandler(req, res);
    //   case "PUT":
    //     return putQamisSuggestionItemHandler(req, res);
      case "DELETE":
        return deleteQamisSuggestionItemHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
