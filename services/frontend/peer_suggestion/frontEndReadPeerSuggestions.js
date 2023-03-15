import axios from "axios";

export default async function frontEndReadPeerSuggestions({
  submittedPeerReviewId,
}) {
  try {
    const peerSuggestions = await axios.get("/api/peer_suggestion", {
      params: {
        submittedPeerReviewId,
      },
    });
    return peerSuggestions.data;
  } catch (error) {
    throw error;
  }
}
