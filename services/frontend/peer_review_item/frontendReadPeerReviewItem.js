import axios from "axios";

export default async function frontendReadPeerReviewItem({
  questionId,
  peerReviewId,
}) {
  try {
    const peerReviewItem = await axios.get("/api/peer_review_item", {
      params: {
        questionId,
        peerReviewId,
      },
    });
    return peerReviewItem.data;
  } catch (error) {
    throw error;
  }
}
