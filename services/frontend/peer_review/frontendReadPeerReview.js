import axios from "axios";

export default async function frontendReadPeerReviews({ facultyId, iMId }) {
  try {
    const peerReview = await axios.get("/api/peer_review", {
      params: {
        facultyId,
        iMId,
      },
    });
    return peerReview.data;
  } catch (error) {
    throw error;
  }
}
