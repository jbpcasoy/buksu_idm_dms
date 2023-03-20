import axios from "axios";

export default async function frontendDeletePeerSuggestionItem(id) {
  try {
    const peerSuggestionItem = await axios.delete(
      `/api/peer_suggestion_item/${id}`
    );
    return peerSuggestionItem;
  } catch (error) {
    throw error;
  }
}
