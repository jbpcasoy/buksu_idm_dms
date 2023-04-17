import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getSubmittedPeerSuggestionsHandler from "@/services/handlers/submitted_peer_suggestion/getSubmittedPeerSuggestionsHandler";
import postSubmittedPeerSuggestionHandler from "@/services/handlers/submitted_peer_suggestion/postSubmittedPeerSuggestionHandler";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);
    switch (req.method) {
      case "POST":
        return postSubmittedPeerSuggestionHandler(req, res);
      case "GET":
        return getSubmittedPeerSuggestionsHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
