import createPeerSuggestionItem from "@/services/api/peer_suggestion_item/createPeerSuggestionItem";

export default async function postPeerSuggestionItemHandler(req, res) {
  const { peerSuggestionId, value, pageNumber, remarks } = req.body;

  const peerSuggestionItem = await createPeerSuggestionItem({
    peerSuggestionId,
    value,
    pageNumber,
    remarks,
  });

  return res.status(201).json(peerSuggestionItem);
}
