import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import deletePeerSuggestionHandler from "@/services/handlers/peer_suggestion/deletePeerSuggestionHandler";
import getPeerSuggestionHandler from "@/services/handlers/peer_suggestion/getPeerSuggestionHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getPeerSuggestionHandler(req, res);
    case "DELETE":
      return deletePeerSuggestionHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
