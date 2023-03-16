import usePeerSuggestion from "@/hooks/usePeerSuggestion";
import usePeerSuggestionItems from "@/hooks/usePeerSuggestionItems";
import useSubmittedPeerReview from "@/hooks/useSubmittedPeerReview";
import PeerSuggestionItemView from "./PeerSuggestionItemView";
import SuggestionView from "./SuggestionView";

export default function PeerSuggestionView({ peerReview }) {
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
    <SuggestionView title={"Peer Suggestions"}>
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
