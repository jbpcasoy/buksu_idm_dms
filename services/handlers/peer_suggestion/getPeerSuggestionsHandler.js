import readPeerSuggestions from "@/services/api/peer_suggestion/readPeerSuggestions";

export default async function getPeerSuggestionsHandler(req, res) {
  const { limit, page, submittedPeerReviewId } = req.query;
  const peerSuggestions = await readPeerSuggestions({
    limit: limit ? parseInt(limit) : undefined,
    page: page ? parseInt(page) : undefined,
    submittedPeerReviewId,
  });
  return res.status(200).json(peerSuggestions);
}
