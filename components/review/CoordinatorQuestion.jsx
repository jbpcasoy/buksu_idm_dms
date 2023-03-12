import frontendCreateCoordinatorReviewItem from "@/services/frontend/coordinator_review_item/frontendCreateCoordinatorReviewItem";
import frontendReadCoordinatorReviewItems from "@/services/frontend/coordinator_review_item/frontendReadCoordinatorReviewItems";
import frontendUpdateCoordinatorReviewItem from "@/services/frontend/coordinator_review_item/frontendUpdateCoordinatorReviewItem";
import { useEffect, useState } from "react";
import Question from "./Question";

export default function CoordinatorQuestion({
  title,
  question,
  questionId,
  coordinatorReview,
  onNext,
  onPrevious,
  onSubmit,
  disableNext = false,
  disablePrevious = false,
  disableSubmit = true,
}) {
  const [answer, setAnswer] = useState();
  const [coordinatorReviewItem, setCoordinatorReviewItem] = useState();
  const [loading, setLoading] = useState(true);

  function handleSelect(e) {
    return setAnswer(e.target.value);
  }

  async function handleRespond() {
    setLoading(true);
    return frontendCreateCoordinatorReviewItem({
      questionId: questionId,
      answer: answer,
      coordinatorReviewId: coordinatorReview.id,
    })
      .catch((err) => {
        return frontendUpdateCoordinatorReviewItem(coordinatorReviewItem.id, {
          answer,
        }).catch((err) => {
          console.error(err);
        });
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    let subscribe = true;
    setLoading(true);

    frontendReadCoordinatorReviewItems({
      questionId: questionId,
      coordinatorReviewId: coordinatorReview.id,
    }).then((res) => {
      if (!subscribe) return;
      setLoading(false);
      if (res.total < 1) {
        return setCoordinatorReviewItem(null);
      }
      setCoordinatorReviewItem(res.data[0]);
    });

    return () => {
      subscribe = false;
    };
  }, [coordinatorReview.id, questionId]);

  useEffect(() => {
    if (!coordinatorReviewItem) return;
    setAnswer(coordinatorReviewItem.answer);
  }, [coordinatorReviewItem]);

  return (
    <Question
      loading={loading}
      answer={answer}
      handleSelect={handleSelect}
      title={title}
      question={question}
      onNext={onNext}
      onPrevious={onPrevious}
      onSubmit={onSubmit}
      disableNext={disableNext}
      disablePrevious={disablePrevious}
      disableSubmit={disableSubmit}
      handleRespond={handleRespond}
    />
  );
}
