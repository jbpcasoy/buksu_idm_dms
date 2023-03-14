import frontendReadPeerReview from "@/services/frontend/admin/peer_review/adminReadPeerReview";
import { useEffect, useState } from "react";

export default function usePeerReview(peerReviewId) {
  const [peerReview, setPeerReview] = useState(null);
  const [peerReviewLoading, setPeerReviewLoading] = useState(true);
  const [peerReviewError, setPeerReviewError] = useState(null);

  useEffect(() => {
    if (!peerReviewId) return;
    let isSubscribed = true;

    frontendReadPeerReview(peerReviewId)
      .then((res) => {
        if (!isSubscribed) return;
        setPeerReview(res);
        setPeerReviewLoading(false);
      })
      .catch((err) => {
        if (!isSubscribed) return;
        setPeerReviewError(err);
        setPeerReviewLoading(false);
      });

    return () => {
      isSubscribed = false;
    };
  }, [peerReviewId]);

  return { peerReview, peerReviewLoading, peerReviewError };
}
