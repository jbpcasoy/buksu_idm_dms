import frontendReadPeerReviewItems from "@/services/frontend/admin/peer_review_item/frontendReadPeerReviewItems";
import { useEffect, useState } from "react";

export default function usePeerReviewItemByQuestion({
  peerReviewId,
  questionId,
  loading,
}) {
  const [peerReviewItem, setPeerReviewItem] = useState(null);
  const [peerReviewItemLoading, setPeerReviewItemLoading] = useState(true);
  const [peerReviewItemError, setPeerReviewItemError] = useState(null);

  useEffect(() => {
    if (!peerReviewId) return;
    let isSubscribed = true;
    setPeerReviewItemLoading(true);

    frontendReadPeerReviewItems({ peerReviewId, questionId })
      .then((res) => {
        if (!isSubscribed) return;
        console.log({ res });
        setPeerReviewItem(res.data[0]);
      })
      .catch((err) => {
        if (!isSubscribed) return;
        setPeerReviewItemError(err);
      })
      .finally(() => {
        setPeerReviewItemLoading(false);
      });

    return () => {
      isSubscribed = false;
    };
  }, [peerReviewId, questionId, loading]);

  return { peerReviewItem, peerReviewItemLoading, peerReviewItemError };
}
