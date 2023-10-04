import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
// import deleteQamisSuggestionHandler from "@/services/handlers/qamis_suggestion/deleteQamisSuggestionHandler";
import getQamisSuggestionHandler from "@/services/handlers/qamis_suggestion/getQamisSuggestionHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getQamisSuggestionHandler(req, res);
      //   case "DELETE":
      //     return deleteQamisSuggestionHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
