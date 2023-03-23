import readSubmittedPeerSuggestion from "@/services/api/submitted_peer_suggestion/readSubmittedPeerSuggestion";

export default async function getSubmittedPeerSuggestionHandler(req, res) {
  const { id } = req.query;

  const submittedPeerSuggestion = await readSubmittedPeerSuggestion(id);
  return res.status(200).json(submittedPeerSuggestion);
}
