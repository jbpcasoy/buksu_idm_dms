import frontendReadChairpersonReview from "@/services/frontend/admin/chairperson_review/frontendReadChairpersonReview";
import { useEffect, useState } from "react";

export default function useChairpersonReview(chairpersonReviewId) {
  const [chairpersonReview, setChairpersonReview] = useState(null);
  const [chairpersonReviewLoading, setChairpersonReviewLoading] =
    useState(true);
  const [chairpersonReviewError, setChairpersonReviewError] = useState(null);

  useEffect(() => {
    if (!chairpersonReviewId) return;
    let isSubscribed = true;

    frontendReadChairpersonReview(chairpersonReviewId)
      .then((res) => {
        if (!isSubscribed) return;
        setChairpersonReview(res);
        setChairpersonReviewLoading(false);
      })
      .catch((err) => {
        if (!isSubscribed) return;
        setChairpersonReviewError(err);
        setChairpersonReviewLoading(false);
      });

    return () => {
      isSubscribed = false;
    };
  }, [chairpersonReviewId]);

  return {
    chairpersonReview,
    chairpersonReviewLoading,
    chairpersonReviewError,
  };
}
