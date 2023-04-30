import useChairpersonReviewItemByQuestion from "@/hooks/useChairpersonReviewItemByQuestion";
import frontendUpdateChairpersonReviewItem from "@/services/frontend/chairperson_review_item/frontendUpdateChairpersonReviewItem";
import { useState } from "react";
import PreviewQuestion from "./PreviewQuestion";

export default function ChairpersonPreviewQuestion({
  question,
  chairpersonReviewId,
  disabled = false,
}) {
  const [loading, setLoading] = useState(false);
  const {
    chairpersonReviewItem,
    chairpersonReviewItemError,
    chairpersonReviewItemLoading,
  } = useChairpersonReviewItemByQuestion({
    chairpersonReviewId,
    questionId: question.id,
    loading,
  });

  async function handleRespond(answer) {
    setLoading(true);
    return frontendUpdateChairpersonReviewItem(chairpersonReviewItem.id, {
      answer,
    }).finally(() => {
      setLoading(false);
    });
  }

  return (
    <PreviewQuestion
      disabled={disabled}
      loading={chairpersonReviewItemLoading}
      key={question.id}
      question={question}
      answer={chairpersonReviewItem?.answer}
      onSelect={handleRespond}
    />
  );
}
