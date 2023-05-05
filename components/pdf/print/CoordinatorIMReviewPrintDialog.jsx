import useCoordinatorReview from "@/hooks/useCoordinatorReview";
import IMReviewPrintDialog from "./IMReviewPrintDialog";

export default function CoordinatorIMReviewPrintDialog({ iM }) {
  const {
    coordinatorReview,
    coordinatorReviewError,
    coordinatorReviewLoading,
  } = useCoordinatorReview(iM.SubmittedCoordinatorReview.coordinatorReviewId);

  return (
    <IMReviewPrintDialog
      imTitle={iM?.title}
      authors={iM?.authors}
      imType={iM?.type}
      coordinator={
        iM?.SubmittedCoordinatorReview?.CoordinatorReview?.Coordinator?.Faculty
          ?.user?.name
      }
      reviewItems={coordinatorReview?.CoordinatorReviewItem}
    />
  );
}
