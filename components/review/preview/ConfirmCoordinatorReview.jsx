import { sections } from "@/constants/questions";
import ConfirmReview from "./ConfirmReview";
import CoordinatorPreviewQuestion from "./CoordinatorPreviewQuestion";
import PreviewSection from "./PreviewSection";

export default function ConfirmCoordinatorReview({
  coordinatorReviewId,
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
                <CoordinatorPreviewQuestion
                  key={question.id}
                  question={question}
                  coordinatorReviewId={coordinatorReviewId}
                />
              );
          })}
        </PreviewSection>
      ))}
    </ConfirmReview>
  );
}
