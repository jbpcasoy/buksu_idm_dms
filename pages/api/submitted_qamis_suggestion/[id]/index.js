import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
// import deleteSubmittedQamisSuggestionHandler from "@/services/handlers/submitted_qamis_suggestion/deleteSubmittedQamisSuggestionHandler";
import getSubmittedQamisSuggestionHandler from "@/services/handlers/submitted_qamis_suggestion/getSubmittedQamisSuggestionHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getSubmittedQamisSuggestionHandler(req, res);
    //   case "DELETE":
    //     return deleteSubmittedQamisSuggestionHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
