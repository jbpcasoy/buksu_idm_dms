import axios from "axios";

export default async function frontendReadPeerReview(id) {
  try {
    const peerReview = await axios.get(`/api/peer_review/${id}`);
    return peerReview.data;
  } catch (error) {
    throw error;
  }
}
