import useCoordinatorSuggestion from "@/hooks/useCoordinatorSuggestion";
import useCoordinatorSuggestionItems from "@/hooks/useCoordinatorSuggestionItems";
import useIM from "@/hooks/useIM";
import useSubmittedCoordinatorReview from "@/hooks/useSubmittedCoordinatorReview";
import frontendCreateCoordinatorSuggestionItem from "@/services/frontend/coordinator_sugestion_item/frontendCreateCoordinatorSuggestionItem";
import frontendCreateSubmittedCoordinatorSuggestion from "@/services/frontend/submitted_coordinator_suggestion/frontendCreateSubmittedCoordinatorSuggestion";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CoordinatorSuggestionItem from "./CoordinatorSuggestionItem";
import Suggestion from "./Suggestion";

export default function CoordinatorSuggestion({
  coordinatorReview,
  onFinish,
  onPrevious,
}) {
  const {
    submittedCoordinatorReview,
    submittedCoordinatorReviewError,
    submittedCoordinatorReviewLoading,
  } = useSubmittedCoordinatorReview({
    coordinatorReviewId: coordinatorReview.id,
  });
  const {
    coordinatorSuggestion,
    coordinatorSuggestionError,
    coordinatorSuggestionLoading,
  } = useCoordinatorSuggestion({
    submittedCoordinatorReviewId: submittedCoordinatorReview?.id,
  });
  const {
    coordinatorSuggestionItems,
    coordinatorSuggestionItemsError,
    coordinatorSuggestionItemsLoading,
    refreshCoordinatorSuggestionItems,
  } = useCoordinatorSuggestionItems({
    coordinatorSuggestionId: coordinatorSuggestion?.id,
  });
  const router = useRouter();
  const { iM, iMError, iMLoading } = useIM(router?.query?.id);

  async function handleSubmit(values) {
    return frontendCreateCoordinatorSuggestionItem({
      coordinatorSuggestionId: coordinatorSuggestion.id,
      value: values.value,
      pageNumber: values.pageNumber,
      remarks: values.remarks,
    }).then(() => {
      refreshCoordinatorSuggestionItems();
    });
  }

  async function handleSubmitSuggestion() {
    return frontendCreateSubmittedCoordinatorSuggestion({
      coordinatorSuggestionId: coordinatorSuggestion.id,
    }).catch((err) => {
      console.error(err);
    });
  }

  useEffect(() => {
    console.log({ coordinatorReview });
  }, [coordinatorReview]);

  useEffect(() => {
    console.log({ submittedCoordinatorReview });
  }, [submittedCoordinatorReview]);

  useEffect(() => {
    console.log({ coordinatorSuggestion });
  }, [coordinatorSuggestion]);

  useEffect(() => {
    console.log({ coordinatorSuggestionItems });
  }, [coordinatorSuggestionItems]);

  return (
    <Suggestion
      handleSubmit={handleSubmit}
      onFinish={() => {
        handleSubmitSuggestion().then(() => onFinish());
      }}
      onPrevious={onPrevious}
      iM={iM}
      showChairpersonSuggestion
      showPeerSuggestion
      title='Coordinator Suggestion'
    >
      {coordinatorSuggestionItems.map((coordinatorSuggestionItem) => (
        <CoordinatorSuggestionItem
          key={coordinatorSuggestionItem.id}
          coordinatorSuggestionItem={coordinatorSuggestionItem}
        />
      ))}
    </Suggestion>
  );
}
