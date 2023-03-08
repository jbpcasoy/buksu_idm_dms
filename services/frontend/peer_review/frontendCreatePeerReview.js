import axios from "axios";

export default async function frontendCreatePeerReview({ iMId }) {
  try {
    const peerReview = await axios.post("/api/peer_review", {
      iMId,
    });
    return peerReview.data;
  } catch (error) {
    throw error;
  }
}
