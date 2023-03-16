import axios from "axios";

export default async function frontendCreatePeerSuggestion({
  submittedPeerReviewId,
}) {
  try {
    const peerSuggestion = await axios.post("/api/peer_suggestion", {
      submittedPeerReviewId,
    });

    return peerSuggestion.data;
  } catch (error) {
    throw error;
  }
}
