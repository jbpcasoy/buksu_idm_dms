import axios from "axios";

export default async function frontendCreateSubmittedPeerSuggestion({
  peerSuggestionId,
}) {
  try {
    const submittedPeerSuggestion = await axios.post(
      "/api/submitted_peer_suggestion",
      {
        peerSuggestionId,
      }
    );
    return submittedPeerSuggestion.data;
  } catch (error) {
    throw error;
  }
}
