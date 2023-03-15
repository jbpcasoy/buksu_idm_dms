import useIM from "@/hooks/useIM";
import usePeerSuggestion from "@/hooks/usePeerSuggestion";
import usePeerSuggestionItems from "@/hooks/usePeerSuggestionItems";
import useSubmittedPeerReview from "@/hooks/useSubmittedPeerReview";
import frontendCreatePeerSuggestionItem from "@/services/frontend/peer_suggestion_item/frontendCreatePeerSuggestionItem";
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
      handleSubmit={handleSubmit}
      onFinish={onFinish}
      onPrevious={onPrevious}
      iM={iM}
    >
      {peerSuggestionItems.map((peerSuggestionItem) => (
        <PeerSuggestionItem peerSuggestionItem={peerSuggestionItem} />
      ))}
    </Suggestion>
  );
}
