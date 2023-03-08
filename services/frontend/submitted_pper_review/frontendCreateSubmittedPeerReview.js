import axios from "axios";

export default async function frontendCreateSubmittedPeerReview({
  peerReviewId,
}) {
  try {
    const submittedPeerReview = await axios.post("/api/submitted_peer_review", {
      peerReviewId,
    });
    return submittedPeerReview.data;
  } catch (error) {
    throw error;
  }
}
