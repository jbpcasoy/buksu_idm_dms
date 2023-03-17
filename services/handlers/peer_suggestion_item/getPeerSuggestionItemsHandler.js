import readPeerSuggestionItems from "@/services/api/peer_suggestion_item/readPeerSuggestionItems";

export default async function getPeerSuggestionItemsHandler(req, res) {
  const { limit, page, peerSuggestionId } = req.query;

  const peerSuggestionItems = await readPeerSuggestionItems({
    limit: limit ? parseInt(limit) : undefined,
    page: page ? parseInt(page) : undefined,
    peerSuggestionId,
  });
  return res.status(200).json(peerSuggestionItems);
}
