import frontendReadCoordinatorReviewItems from "@/services/frontend/coordinator_review_item/frontendReadCoordinatorReviewItems";
import { useEffect, useState } from "react";

export default function useCoordinatorReviewItemByQuestion({
  coordinatorReviewId,
  questionId,
  loading,
}) {
  const [coordinatorReviewItem, setCoordinatorReviewItem] = useState(null);
  const [coordinatorReviewItemLoading, setCoordinatorReviewItemLoading] =
    useState(true);
  const [coordinatorReviewItemError, setCoordinatorReviewItemError] =
    useState(null);

  useEffect(() => {
    if (!coordinatorReviewId) return;
    let isSubscribed = true;
    setCoordinatorReviewItemLoading(true);

    frontendReadCoordinatorReviewItems({ coordinatorReviewId, questionId })
      .then((res) => {
        if (!isSubscribed) return;
        console.log({ res });
        setCoordinatorReviewItem(res.data[0]);
      })
      .catch((err) => {
        if (!isSubscribed) return;
        setCoordinatorReviewItemError(err);
      })
      .finally(() => {
        setCoordinatorReviewItemLoading(false);
      });

    return () => {
      isSubscribed = false;
    };
  }, [coordinatorReviewId, questionId, loading]);

  return {
    coordinatorReviewItem,
    coordinatorReviewItemLoading,
    coordinatorReviewItemError,
  };
}
