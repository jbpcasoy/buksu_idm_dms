import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import deletePeerSuggestionHandler from "@/services/handlers/peer_suggestion/deletePeerSuggestionHandler";
import getPeerSuggestionHandler from "@/services/handlers/peer_suggestion/getPeerSuggestionHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getPeerSuggestionHandler(req, res);
      case "DELETE":
        return deletePeerSuggestionHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
