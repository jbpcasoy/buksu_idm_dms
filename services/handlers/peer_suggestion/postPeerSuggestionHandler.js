import createPeerSuggestion from "@/services/api/peer_suggestion/createPeerSuggestion";

export default async function postPeerSuggestionHandler(req, res) {
  const { submittedPeerReviewId } = req.body;

  const peerSuggestion = await createPeerSuggestion({
    submittedPeerReviewId,
  });
  return res.status(201).json(peerSuggestion);
}
