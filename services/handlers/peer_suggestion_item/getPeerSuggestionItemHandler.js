import readPeerSuggestionItems from "@/services/api/peer_suggestion_item/readPeerSuggestionItems";

export default async function getPeerSuggestionItemHandler(req, res) {
  const { limit = 10, page = 1 } = req.query;

  const peerSuggestionItems = await readPeerSuggestionItems({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(peerSuggestionItems);
}
