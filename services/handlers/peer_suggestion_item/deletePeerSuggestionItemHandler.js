import deletePeerSuggestionItem from "@/services/api/peer_suggestion_item/deletePeerSuggestionItem";

export default async function deletePeerSuggestionItemHandler(req, res) {
  const { id } = req.query;
  const peerSuggestionItem = await deletePeerSuggestionItem(id);
  return res.status(200).json(peerSuggestionItem);
}
