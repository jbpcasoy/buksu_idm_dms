import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getPeerSuggestionItemHandler from "@/services/handlers/peer_suggestion_item/getPeerSuggestionItemHandler";
import postPeerSuggestionItemHandler from "@/services/handlers/peer_suggestion_item/postPeerSuggestionItemHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postPeerSuggestionItemHandler(req, res);
    case "GET":
      return getPeerSuggestionItemHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
