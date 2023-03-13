import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getPeerSuggestionHandler from "@/services/handlers/peer_suggestion/getPeerSuggestionHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getPeerSuggestionHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
