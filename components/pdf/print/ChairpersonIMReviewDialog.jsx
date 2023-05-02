import React from "react";
import IMReviewPrintDialog from "./IMReviewPrintDialog";
import useChairpersonReview from "@/hooks/useChairpersonReview";

export default function ChairpersonIMReviewPrintDialog({ iM }) {
  const {
    chairpersonReview,
    chairpersonReviewError,
    chairpersonReviewLoading,
  } = useChairpersonReview(iM.SubmittedChairpersonReview.chairpersonReviewId);

  return (
    <IMReviewPrintDialog
      imTitle={iM?.title}
      authors={iM?.authors}
      imType={iM?.type}
      chairperson={
        iM?.SubmittedChairpersonReview?.ChairpersonReview?.Chairperson?.Faculty
          ?.user?.name
      }
      reviewItems={chairpersonReview?.ChairpersonReviewItem}
    />
  );
}
