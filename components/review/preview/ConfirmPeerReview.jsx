import { sections } from "@/constants/questions";
import ConfirmReview from "./ConfirmReview";
import PeerPreviewQuestion from "./PeerPreviewQuestion";
import PreviewSection from "./PreviewSection";

export default function ConfirmPeerReview({
  peerReviewId,
  onPrevious,
  onSubmit,
}) {
  return (
    <ConfirmReview onPrevious={onPrevious} onSubmit={onSubmit}>
      {sections.map((section) => (
        <PreviewSection key={section.title} section={section}>
          {section.questions.map((question) => {
            if (question.active)
              return (
                <PeerPreviewQuestion
                  key={question.id}
                  question={question}
                  peerReviewId={peerReviewId}
                />
              );
          })}
        </PreviewSection>
      ))}
    </ConfirmReview>
  );
}
