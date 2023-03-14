import useCoordinatorReviewItemByQuestion from "@/hooks/useCoordinatorReviewItemByQuestion";
import frontendUpdateCoordinatorReviewItem from "@/services/frontend/coordinator_review_item/frontendUpdateCoordinatorReviewItem";
import { useState } from "react";
import PreviewQuestion from "./PreviewQuestion";

export default function CoordinatorPreviewQuestion({
  question,
  coordinatorReviewId,
}) {
  const [loading, setLoading] = useState(false);
  const {
    coordinatorReviewItem,
    coordinatorReviewItemError,
    coordinatorReviewItemLoading,
  } = useCoordinatorReviewItemByQuestion({
    coordinatorReviewId,
    questionId: question.id,
    loading,
  });

  async function handleRespond(answer) {
    setLoading(true);
    return frontendUpdateCoordinatorReviewItem(coordinatorReviewItem.id, {
      answer,
    }).finally(() => {
      setLoading(false);
    });
  }

  return (
    <PreviewQuestion
      loading={coordinatorReviewItemLoading}
      key={question.id}
      question={question}
      answer={coordinatorReviewItem?.answer}
      onSelect={handleRespond}
    />
  );
}
