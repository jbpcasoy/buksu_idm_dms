import readPeerSuggestions from "@/services/api/peer_suggestion/readPeerSuggestions";

export default async function getPeerSuggestionsHandler(req, res) {
  const { limit = 10, page = 1 } = req.query;
  const peerSuggestions = await readPeerSuggestions({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(peerSuggestions);
}
