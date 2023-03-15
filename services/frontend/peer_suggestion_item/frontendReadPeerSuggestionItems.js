import axios from "axios";

export default async function frontendReadPeerSuggestionItems({
  peerSuggestionId,
}) {
  try {
    const peerSuggestionItems = await axios.get("/api/peer_suggestion_item", {
      params: {
        peerSuggestionId,
      },
    });
    return peerSuggestionItems.data;
  } catch (error) {
    throw error;
  }
}
