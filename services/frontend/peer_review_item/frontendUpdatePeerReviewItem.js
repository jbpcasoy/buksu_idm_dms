import axios from "axios";

export default async function frontendUpdatePeerReviewItem(id, { answer }) {
  try {
    const peerReviewItem = await axios.put(`/api/peer_review_item/${id}`, {
      answer,
    });
    return peerReviewItem.data;
  } catch (error) {
    throw error;
  }
}
