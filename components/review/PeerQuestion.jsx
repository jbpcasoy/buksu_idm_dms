import frontendCreatePeerReviewItem from "@/services/frontend/peer_review/frontendCreatePeerReviewItem";
import frontendReadPeerReviewItem from "@/services/frontend/peer_review_item/frontendReadPeerReviewItem";
import frontendUpdatePeerReviewItem from "@/services/frontend/peer_review_item/frontendUpdatePeerReviewItem";
import { useEffect, useState } from "react";
import Question from "./Question";

export default function PeerQuestion({
  title,
  question,
  questionId,
  peerReview,
  onNext,
  onPrevious,
  onSubmit,
  disableNext = false,
  disablePrevious = false,
  disableSubmit = true,
}) {
  const [answer, setAnswer] = useState("NAA");
  const [peerReviewItem, setPeerReviewItem] = useState();
  const [loading, setLoading] = useState(true);

  function handleSelect(e) {
    return setAnswer(e.target.value);
  }

  async function handleRespond() {
    setLoading(true);
    return frontendCreatePeerReviewItem({
      questionId: questionId,
      answer: answer,
      peerReviewId: peerReview.id,
    })
      .catch((err) => {
        return frontendUpdatePeerReviewItem(peerReviewItem.id, { answer });
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    let subscribe = true;
    setLoading(true);

    frontendReadPeerReviewItem({
      questionId: questionId,
      peerReviewId: peerReview.id,
    }).then((res) => {
      if (!subscribe) return;
      setLoading(false);
      if (res.total < 1) {
        return setPeerReviewItem(null);
      }
      setPeerReviewItem(res.data[0]);
    });

    return () => {
      subscribe = false;
    };
  }, [peerReview.id, questionId]);

  useEffect(() => {
    if (!peerReviewItem) return;
    setAnswer(peerReviewItem.answer);
  }, [peerReviewItem]);

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
