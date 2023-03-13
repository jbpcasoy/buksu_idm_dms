import axios from "axios";

export default async function frontendReadPeerReviewItems({ peerReviewId }) {
  try {
    const peerReviewItems = await axios.get("/api/peer_review_item", {
      params: {
        peerReviewId,
      },
    });

    return peerReviewItems.data;
  } catch (error) {
    throw error;
  }
}
