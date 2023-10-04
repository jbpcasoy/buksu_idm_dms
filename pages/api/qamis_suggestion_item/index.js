import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
// import getQamisSuggestionItemsHandler from "@/services/handlers/qamis_suggestion_item/getQamisSuggestionItemsHandler";
import postQamisSuggestionItemHandler from "@/services/handlers/qamis_suggestion_item/postQamisSuggestionItemHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "POST":
        return postQamisSuggestionItemHandler(req, res);
    //   case "GET":
    //     return getQamisSuggestionItemsHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
