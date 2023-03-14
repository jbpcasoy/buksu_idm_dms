import frontendReadChairpersonReviewItems from "@/services/frontend/chairperson_review_item/frontendReadChairpersonReviewItem";
import { useEffect, useState } from "react";

export default function useChairpersonReviewItemByQuestion({
  chairpersonReviewId,
  questionId,
  loading,
}) {
  const [chairpersonReviewItem, setChairpersonReviewItem] = useState(null);
  const [chairpersonReviewItemLoading, setChairpersonReviewItemLoading] =
    useState(true);
  const [chairpersonReviewItemError, setChairpersonReviewItemError] =
    useState(null);

  useEffect(() => {
    if (!chairpersonReviewId) return;
    let isSubscribed = true;
    setChairpersonReviewItemLoading(true);

    frontendReadChairpersonReviewItems({ chairpersonReviewId, questionId })
      .then((res) => {
        if (!isSubscribed) return;
        console.log({ res });
        setChairpersonReviewItem(res.data[0]);
      })
      .catch((err) => {
        if (!isSubscribed) return;
        setChairpersonReviewItemError(err);
      })
      .finally(() => {
        setChairpersonReviewItemLoading(false);
      });

    return () => {
      isSubscribed = false;
    };
  }, [chairpersonReviewId, questionId, loading]);

  return {
    chairpersonReviewItem,
    chairpersonReviewItemLoading,
    chairpersonReviewItemError,
  };
}
