import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getPeerSuggestionItemsHandler from "@/services/handlers/peer_suggestion_item/getPeerSuggestionItemsHandler";
import postPeerSuggestionItemHandler from "@/services/handlers/peer_suggestion_item/postPeerSuggestionItemHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "POST":
        return postPeerSuggestionItemHandler(req, res);
      case "GET":
        return getPeerSuggestionItemsHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
