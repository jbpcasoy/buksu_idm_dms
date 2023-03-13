import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import postPeerSuggestionHandler from "@/services/handlers/peer_suggestion/postPeerSuggestionHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postPeerSuggestionHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
