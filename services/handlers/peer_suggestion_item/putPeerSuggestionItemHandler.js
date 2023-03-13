import updatePeerSuggestionItem from "@/services/api/peer_suggestion_item/updatePeerSuggestionItem";

export default async function putPeerSuggestionItemHandler(req, res) {
  const { id } = req.query;
  const { value, pageNumber, actionTaken, remarks } = req.body;

  const peerSuggestionItem = await updatePeerSuggestionItem(id, {
    value,
    actionTaken,
    pageNumber,
    remarks,
  });
  return res.status(200).json(peerSuggestionItem);
}
