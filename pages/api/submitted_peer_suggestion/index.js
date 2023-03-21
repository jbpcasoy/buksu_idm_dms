import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import postSubmittedPeerSuggestionHandler from "@/services/handlers/submitted_peer_suggestion/postSubmittedPeerSuggestionHandler";

export default async function handler(req, res) {
  await reqLog(req, res);
  switch (req.method) {
    case "POST":
      return postSubmittedPeerSuggestionHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
