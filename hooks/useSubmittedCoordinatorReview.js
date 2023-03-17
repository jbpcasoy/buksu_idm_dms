import frontendReadSubmittedCoordinatorReviews from "@/services/frontend/submitted_coordinator_review/frontendReadSubmittedCoordinatorReviews";
import { useEffect, useState } from "react";

export default function useSubmittedCoordinatorReview({ coordinatorReviewId }) {
  const [submittedCoordinatorReview, setSubmittedCoordinatorReview] =
    useState(null);
  const [
    submittedCoordinatorReviewLoading,
    setSubmittedCoordinatorReviewLoading,
  ] = useState(true);
  const [submittedCoordinatorReviewError, setSubmittedCoordinatorReviewError] =
    useState(null);

  useEffect(() => {
    if (!coordinatorReviewId) return;
    let isSubscribed = true;

    frontendReadSubmittedCoordinatorReviews({
      coordinatorReviewId: coordinatorReviewId,
    })
      .then((res) => {
        console.log({ res });
        if (!isSubscribed) return;
        setSubmittedCoordinatorReview(res.data[0]);
        setSubmittedCoordinatorReviewLoading(false);
      })
      .catch((err) => {
        if (!isSubscribed) return;
        setSubmittedCoordinatorReviewError(err);
        setSubmittedCoordinatorReviewLoading(false);
      });

    return () => {
      isSubscribed = false;
    };
  }, [coordinatorReviewId]);

  return {
    submittedCoordinatorReview,
    submittedCoordinatorReviewLoading,
    submittedCoordinatorReviewError,
  };
}
