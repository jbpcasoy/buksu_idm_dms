import axios from "axios";

export default async function frontendReadSubmittedPeerReviews({
  peerReviewId,
}) {
  try {
    const submittedPeerReviews = await axios.get("/api/submitted_peer_review", {
      params: {
        peerReviewId,
      },
    });
    return submittedPeerReviews.data;
  } catch (error) {
    throw error;
  }
}
