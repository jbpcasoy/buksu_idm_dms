import frontendReadSubmittedChairpersonReviews from "@/services/frontend/submitted_chairperson_review/frontendReadSubmittedChairpersonReviews";
import { useEffect, useState } from "react";

export default function useSubmittedChairpersonReview({ chairpersonReviewId }) {
  const [submittedChairpersonReview, setSubmittedChairpersonReview] =
    useState(null);
  const [
    submittedChairpersonReviewLoading,
    setSubmittedChairpersonReviewLoading,
  ] = useState(true);
  const [submittedChairpersonReviewError, setSubmittedChairpersonReviewError] =
    useState(null);

  useEffect(() => {
    if (!chairpersonReviewId) return;
    let isSubscribed = true;

    frontendReadSubmittedChairpersonReviews({ chairpersonReviewId })
      .then((res) => {
        console.log({ res });
        if (!isSubscribed) return;
        setSubmittedChairpersonReview(res.data[0]);
        setSubmittedChairpersonReviewLoading(false);
      })
      .catch((err) => {
        if (!isSubscribed) return;
        setSubmittedChairpersonReviewError(err);
        setSubmittedChairpersonReviewLoading(false);
      });

    return () => {
      isSubscribed = false;
    };
  }, [chairpersonReviewId]);

  return {
    submittedChairpersonReview,
    submittedChairpersonReviewLoading,
    submittedChairpersonReviewError,
  };
}
