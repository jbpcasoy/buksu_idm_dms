import axios from "axios";

export default async function frontendUpdatePeerSuggestionItem(
  id,
  { value, pageNumber, remarks, actionTaken }
) {
  try {
    const peerSuggestionItem = await axios.put(
      `/api/peer_suggestion_item/${id}`,
      {
        value,
        pageNumber,
        remarks,
        actionTaken,
      }
    );
    return peerSuggestionItem.data;
  } catch (error) {
    throw error;
  }
}
