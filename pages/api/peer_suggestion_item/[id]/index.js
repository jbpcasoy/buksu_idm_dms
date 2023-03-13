import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getPeerSuggestionItemHandler from "@/services/handlers/peer_suggestion_item/getPeerSuggestionItemHandler";
import putPeerSuggestionItemHandler from "@/services/handlers/peer_suggestion_item/putPeerSuggestionItemHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getPeerSuggestionItemHandler(req, res);
    case "PUT":
      return putPeerSuggestionItemHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
