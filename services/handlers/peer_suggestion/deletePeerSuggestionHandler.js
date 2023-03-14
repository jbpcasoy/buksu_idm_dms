import deletePeerSuggestion from "@/services/api/peer_suggestion/deletePeerSuggestion";

export default async function deletePeerSuggestionHandler(req, res) {
  const { id } = req.query;

  const peerSuggestion = await deletePeerSuggestion(id);

  return res.status(200).json(peerSuggestion);
}
