import usePeerSuggestion from "@/hooks/usePeerSuggestion";
import usePeerSuggestionItems from "@/hooks/usePeerSuggestionItems";
import useSubmittedPeerReview from "@/hooks/useSubmittedPeerReview";
import { useEffect } from "react";
import AdminSuggestions from "./AdminSuggestions";

export default function AdminPeerSuggestion({ peerReview }) {
  const {
    submittedPeerReview,
    submittedPeerReviewError,
    submittedPeerReviewLoading,
  } = useSubmittedPeerReview({ peerReviewId: peerReview.id });
  const { peerSuggestion, peerSuggestionError, peerSuggestionLoading } =
    usePeerSuggestion({ submittedPeerReviewId: submittedPeerReview?.id });
  const {
    peerSuggestionItems,
    peerSuggestionItemsError,
    peerSuggestionItemsLoading,
    refreshPeerSuggestionItems,
  } = usePeerSuggestionItems({ peerSuggestionId: peerSuggestion?.id });

  useEffect(() => {
    console.log({ peerSuggestionItems });
  }, [peerSuggestionItems]);

  return (
    <AdminSuggestions
      title='Peer Suggestions'
      suggestionItems={peerSuggestionItems}
    />
  );
}
