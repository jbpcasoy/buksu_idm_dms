import frontendReadSubmittedPeerReviews from "@/services/frontend/submitted_peer_review/frontendReadSubmittedPeerReview";
import { useEffect, useState } from "react";

export default function useSubmittedPeerReview({ peerReviewId }) {
  const [submittedPeerReview, setSubmittedPeerReview] = useState(null);
  const [submittedPeerReviewLoading, setSubmittedPeerReviewLoading] =
    useState(true);
  const [submittedPeerReviewError, setSubmittedPeerReviewError] =
    useState(null);

  useEffect(() => {
    if (!peerReviewId) return;
    let isSubscribed = true;

    frontendReadSubmittedPeerReviews({ peerReviewId })
      .then((res) => {
        console.log({ res });
        if (!isSubscribed) return;
        setSubmittedPeerReview(res.data[0]);
        setSubmittedPeerReviewLoading(false);
      })
      .catch((err) => {
        if (!isSubscribed) return;
        setSubmittedPeerReviewError(err);
        setSubmittedPeerReviewLoading(false);
      });

    return () => {
      isSubscribed = false;
    };
  }, [peerReviewId]);

  return {
    submittedPeerReview,
    submittedPeerReviewLoading,
    submittedPeerReviewError,
  };
}
