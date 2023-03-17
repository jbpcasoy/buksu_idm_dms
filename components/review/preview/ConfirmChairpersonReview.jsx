import { sections } from "@/constants/questions";
import ChairpersonPreviewQuestion from "./ChairpersonPreviewQuestion";
import ConfirmReview from "./ConfirmReview";
import PreviewSection from "./PreviewSection";

export default function ConfirmChairpersonReview({
  chairpersonReviewId,
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
                <ChairpersonPreviewQuestion
                  key={question.id}
                  question={question}
                  chairpersonReviewId={chairpersonReviewId}
                />
              );
          })}
        </PreviewSection>
      ))}
    </ConfirmReview>
  );
}
