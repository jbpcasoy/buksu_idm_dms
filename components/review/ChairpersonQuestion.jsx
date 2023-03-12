import frontendCreateChairpersonReviewItem from "@/services/frontend/chairperson_review_item/frontendCreateChairpersonReviewItem";
import frontendReadChairpersonReviewItems from "@/services/frontend/chairperson_review_item/frontendReadChairpersonReviewItem";
import frontendUpdateChairpersonReviewItem from "@/services/frontend/chairperson_review_item/frontendUpdateChairpersonReviewItem";
import { useEffect, useState } from "react";
import Question from "./Question";

export default function ChairpersonQuestion({
  title,
  question,
  questionId,
  chairpersonReview,
  onNext,
  onPrevious,
  onSubmit,
  disableNext = false,
  disablePrevious = false,
  disableSubmit = true,
}) {
  const [answer, setAnswer] = useState();
  const [chairpersonReviewItem, setChairpersonReviewItem] = useState();
  const [loading, setLoading] = useState(true);

  function handleSelect(e) {
    return setAnswer(e.target.value);
  }

  async function handleRespond() {
    setLoading(true);
    return frontendCreateChairpersonReviewItem({
      questionId: questionId,
      answer: answer,
      chairpersonReviewId: chairpersonReview.id,
    })
      .catch((err) => {
        return frontendUpdateChairpersonReviewItem(chairpersonReviewItem.id, {
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

    frontendReadChairpersonReviewItems({
      questionId: questionId,
      chairpersonReviewId: chairpersonReview.id,
    }).then((res) => {
      if (!subscribe) return;
      setLoading(false);
      if (res.total < 1) {
        return setChairpersonReviewItem(null);
      }
      setChairpersonReviewItem(res.data[0]);
    });

    return () => {
      subscribe = false;
    };
  }, [chairpersonReview.id, questionId]);

  useEffect(() => {
    if (!chairpersonReviewItem) return;
    setAnswer(chairpersonReviewItem.answer);
  }, [chairpersonReviewItem]);

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
