import usePeerReviewItemByQuestion from "@/hooks/usePeerReviewResponse";
import frontendUpdatePeerReviewItem from "@/services/frontend/peer_review_item/frontendUpdatePeerReviewItem";
import { useState } from "react";
import PreviewQuestion from "./PreviewQuestion";

export default function PeerPreviewQuestion({ question, peerReviewId }) {
  const [loading, setLoading] = useState(false);
  const { peerReviewItem, peerReviewItemError, peerReviewItemLoading } =
    usePeerReviewItemByQuestion({
      peerReviewId,
      questionId: question.id,
      loading,
    });

  async function handleRespond(answer) {
    setLoading(true);
    return frontendUpdatePeerReviewItem(peerReviewItem.id, {
      answer,
    }).finally(() => {
      setLoading(false);
    });
  }

  return (
    <PreviewQuestion
      loading={peerReviewItemLoading}
      key={question.id}
      question={question}
      answer={peerReviewItem?.answer}
      onSelect={handleRespond}
    />
  );
}
