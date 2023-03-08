import axios from "axios";

export default async function frontendCreatePeerReviewItem({
  questionId,
  answer,
  peerReviewId,
}) {
  try {
    const peerReviewItem = await axios.post("/api/peer_review_item", {
      questionId,
      answer,
      peerReviewId,
    });
    return peerReviewItem.data;
  } catch (error) {
    throw error;
  }
}
