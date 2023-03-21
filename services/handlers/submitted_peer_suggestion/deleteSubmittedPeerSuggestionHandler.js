import deleteSubmittedPeerSuggestion from "@/services/api/submitted_peer_suggestion/deleteSubmittedPeerSuggestion";

export default async function deleteSubmittedPeerSuggestionHandler(req, res) {
  const { id } = req.query;

  const submittedPeerSuggestion = await deleteSubmittedPeerSuggestion(id);
  return res.status(200).json(submittedPeerSuggestion);
}
