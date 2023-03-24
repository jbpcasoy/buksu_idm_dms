import createSubmittedPeerSuggestion from "@/services/api/submitted_peer_suggestion/createSubmittedPeerSuggestion";

export default async function postSubmittedPeerSuggestionHandler(req, res) {
  const { peerSuggestionId } = req.body;

  const submittedPeerSuggestion = await createSubmittedPeerSuggestion({
    peerSuggestionId,
  });
  return res.status(201).json(submittedPeerSuggestion);
}
