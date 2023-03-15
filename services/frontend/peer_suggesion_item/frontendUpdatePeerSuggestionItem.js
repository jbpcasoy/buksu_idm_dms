import axios from "axios";

export default async function frontendUpdatePeerSuggestionItem(
  id,
  { value, pageNumber, remarks }
) {
  try {
    const peerSuggestionItem = await axios.put(
      `/api/peer_suggestion_item/${id}`,
      {
        value,
        pageNumber,
        remarks,
      }
    );
    return peerSuggestionItem.data;
  } catch (error) {
    throw error;
  }
}
