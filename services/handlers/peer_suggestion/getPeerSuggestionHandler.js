import readPeerSuggestion from "@/services/api/peer_suggestion/readPeerSuggestion";

export default async function getPeerSuggestionHandler(req, res) {
  const { id } = req.query;

  const peerSuggestion = await readPeerSuggestion(id);
  return res.status(200).json(peerSuggestion);
}
