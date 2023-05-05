import usePeerReview from "@/hooks/usePeerReview";
import IMReviewPrintDialog from "./IMReviewPrintDialog";

export default function PeerIMReviewPrintDialog({ iM }) {
  const { peerReview, peerReviewError, peerReviewLoading } = usePeerReview(
    iM.SubmittedPeerReview.peerReviewId
  );

  return (
    <IMReviewPrintDialog
      imTitle={iM?.title}
      authors={iM?.authors}
      imType={iM?.type}
      peer={iM?.SubmittedPeerReview?.PeerReview?.Faculty?.user?.name}
      reviewItems={peerReview?.PeerReviewItem}
    />
  );
}
