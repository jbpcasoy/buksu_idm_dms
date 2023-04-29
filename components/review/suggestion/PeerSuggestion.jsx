import useIM from "@/hooks/useIM";
import usePeerSuggestion from "@/hooks/usePeerSuggestion";
import usePeerSuggestionItems from "@/hooks/usePeerSuggestionItems";
import useSubmittedPeerReview from "@/hooks/useSubmittedPeerReview";
import frontendCreatePeerSuggestionItem from "@/services/frontend/peer_suggestion_item/frontendCreatePeerSuggestionItem";
import frontendCreateSubmittedPeerSuggestion from "@/services/frontend/submitted_peer_suggestion/frontendCreateSubmittedPeerSuggestion";
import { useRouter } from "next/router";
import { useEffect } from "react";
import PeerSuggestionItem from "./PeerSuggestionItem";
import Suggestion from "./Suggestion";

export default function PeerSuggestion({ peerReview, onFinish, onPrevious }) {
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
  const router = useRouter();
  const { iM, iMError, iMLoading } = useIM(router?.query?.id);

  async function handleSubmit(values) {
    return frontendCreatePeerSuggestionItem({
      peerSuggestionId: peerSuggestion.id,
      value: values.value,
      pageNumber: values.pageNumber,
      remarks: values.remarks,
    }).then(() => {
      refreshPeerSuggestionItems();
    });
  }

  async function handleSubmitSuggestion() {
    return frontendCreateSubmittedPeerSuggestion({
      peerSuggestionId: peerSuggestion.id,
    });
  }

  useEffect(() => {
    console.log({ submittedPeerReview });
  }, [submittedPeerReview]);

  useEffect(() => {
    console.log({ peerSuggestion });
  }, [peerSuggestion]);

  useEffect(() => {
    console.log({ peerSuggestionItems });
  }, [peerSuggestionItems]);

  return (
    <Suggestion
      showChairpersonSuggestion
      showCoordinatorSuggestion
      handleSubmit={handleSubmit}
      onFinish={async () => {
        return handleSubmitSuggestion().then(() => onFinish());
      }}
      onPrevious={onPrevious}
      iM={iM}
      title='Peer Suggestion'
    >
      {peerSuggestionItems.map((peerSuggestionItem) => (
        <PeerSuggestionItem
          key={peerSuggestionItem.id}
          peerSuggestionItem={peerSuggestionItem}
        />
      ))}
    </Suggestion>
  );
}
