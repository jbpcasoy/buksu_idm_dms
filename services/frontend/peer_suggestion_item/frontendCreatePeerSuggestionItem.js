import axios from "axios";

export default async function frontendCreatePeerSuggestionItem({
  peerSuggestionId,
  value,
  remarks,
  pageNumber,
}) {
  try {
    const peerSuggestionItem = await axios.post("/api/peer_suggestion_item", {
      peerSuggestionId,
      value,
      remarks,
      pageNumber,
    });
    return peerSuggestionItem.data;
  } catch (error) {
    throw error;
  }
}
