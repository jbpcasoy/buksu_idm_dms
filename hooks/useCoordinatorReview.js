import frontendReadCoordinatorReview from "@/services/frontend/admin/coordinator_review/frontendReadCoordinatorReview";
import { useEffect, useState } from "react";

export default function useCoordinatorReview(coordinatorReviewId) {
  const [coordinatorReview, setCoordinatorReview] = useState(null);
  const [coordinatorReviewLoading, setCoordinatorReviewLoading] =
    useState(true);
  const [coordinatorReviewError, setCoordinatorReviewError] = useState(null);

  useEffect(() => {
    if (!coordinatorReviewId) return;
    let isSubscribed = true;

    frontendReadCoordinatorReview(coordinatorReviewId)
      .then((res) => {
        if (!isSubscribed) return;
        setCoordinatorReview(res);
        setCoordinatorReviewLoading(false);
      })
      .catch((err) => {
        if (!isSubscribed) return;
        setCoordinatorReviewError(err);
        setCoordinatorReviewLoading(false);
      });

    return () => {
      isSubscribed = false;
    };
  }, [coordinatorReviewId]);

  return {
    coordinatorReview,
    coordinatorReviewLoading,
    coordinatorReviewError,
  };
}
