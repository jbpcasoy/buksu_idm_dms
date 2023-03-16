import usePeerSuggestion from "@/hooks/usePeerSuggestion";
import usePeerSuggestionItems from "@/hooks/usePeerSuggestionItems";
import useSubmittedPeerReview from "@/hooks/useSubmittedPeerReview";
import PeerSuggestionItemView from "./PeerSuggestionItemView";
import SuggestionView from "./SuggestionView";

export default function PeerSuggestionView({ peerReview, viewOnly = false }) {
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

  return (
    <SuggestionView title={"Peer Suggestions"} viewOnly={viewOnly}>
      {peerSuggestionItems.map((peerSuggestionItem) => (
        <PeerSuggestionItemView
          key={peerSuggestionItem.id}
          peerSuggestionItem={peerSuggestionItem}
          viewOnly
        />
      ))}
    </SuggestionView>
  );
}
