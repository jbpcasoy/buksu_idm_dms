import axios from "axios";

export default async function frontendUpdatePeerReview(id, { submitted }) {
  try {
    const peerReview = await axios.put(`/api/peer_review/${id}`, {
      submitted,
    });

    return peerReview.data;
  } catch (error) {
    throw error;
  }
}
