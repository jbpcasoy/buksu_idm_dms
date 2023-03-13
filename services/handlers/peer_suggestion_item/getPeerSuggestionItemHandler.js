import readPeerSuggestionItem from "@/services/api/peer_suggestion_item/readPeerSuggestionItem";

export default async function getPeerSuggestionItemHandler(req, res) {
  const { id } = req.query;

  const peerSuggestionItem = await readPeerSuggestionItem(id);
  return res.status(200).json(peerSuggestionItem);
}
