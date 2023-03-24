import readSubmittedPeerSuggestions from "@/services/api/submitted_peer_suggestion/readSubmittedPeerSuggestions";

export default async function getSubmittedPeerSuggestionsHandler(req, res) {
  const { limit, page } = req.query;
  const submittedPeerSuggestions = await readSubmittedPeerSuggestions({
    limit: parseInt(limit),
    page: parseInt(page),
  });

  return res.status(200).json(submittedPeerSuggestions);
}
