import frontendCreatePeerSuggestion from "@/services/frontend/peer_suggestion/frontendCreatePeerSuggestion";
import frontendReadPeerSuggestions from "@/services/frontend/peer_suggestion/frontendReadPeerSuggestions";
import { useEffect, useState } from "react";

export default function usePeerSuggestion({ submittedPeerReviewId }) {
  const [peerSuggestion, setPeerSuggestion] = useState(null);
  const [peerSuggestionLoading, setPeerSuggestionLoading] = useState(true);
  const [peerSuggestionError, setPeerSuggestionError] = useState(null);

  useEffect(() => {
    if (!submittedPeerReviewId) return;
    let isSubscribed = true;

    frontendCreatePeerSuggestion({ submittedPeerReviewId })
      .then((res) => {
        if (!isSubscribed) return;
        setPeerSuggestion(res);
        setPeerSuggestionLoading(false);
      })
      .catch((err) => {
        if (!isSubscribed) return;
        frontendReadPeerSuggestions({ submittedPeerReviewId })
          .then((res) => {
            if (!isSubscribed) return;
            setPeerSuggestion(res.data[0]);
            setPeerSuggestionLoading(false);
          })
          .catch((err) => {
            if (!isSubscribed) return;
            setPeerSuggestionError(err);
            setPeerSuggestionLoading(false);
          });
      });

    return () => {
      isSubscribed = false;
    };
  }, [submittedPeerReviewId]);

  return {
    peerSuggestion,
    peerSuggestionLoading,
    peerSuggestionError,
  };
}
