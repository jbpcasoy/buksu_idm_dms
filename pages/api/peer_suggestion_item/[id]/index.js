import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import deletePeerSuggestionItemHandler from "@/services/handlers/peer_suggestion_item/deletePeerSuggestionItemHandler";
import getPeerSuggestionItemHandler from "@/services/handlers/peer_suggestion_item/getPeerSuggestionItemHandler";
import putPeerSuggestionItemHandler from "@/services/handlers/peer_suggestion_item/putPeerSuggestionItemHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getPeerSuggestionItemHandler(req, res);
    case "PUT":
      return putPeerSuggestionItemHandler(req, res);
    case "DELETE":
      return deletePeerSuggestionItemHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
