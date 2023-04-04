import useIMDCoordinatorSuggestion from "@/hooks/imd_coordinator_suggestion/useIMDCoordinatorSuggestion";
import useIMDCoordinatorSuggestionItems from "@/hooks/imd_coordinator_suggestion/useIMDCoordinatorSuggestionItems";
import useIM from "@/hooks/useIM";
import frontendCreateIMDCoordinatorSuggestionItem from "@/services/frontend/imd_coordinator_suggestion_item/frontendCreateIMDCoordinatorSuggestionItem";
import frontendCreateSubmittedIMDCoordinatorSuggestion from "@/services/frontend/submitted_imd_coordinator_suggestion_item/frontendCreateSubmittedIMDCoordinatorSuggestion";
import { useRouter } from "next/router";
import { useEffect } from "react";
import IMDCoordinatorSuggestionItem from "./IMDCoordinatorSuggestionItem";
import Suggestion from "./Suggestion";

export default function IMDCoordinatorSuggestion({
  //   iMDCoordinatorReview,
  onFinish,
  onPrevious,
}) {
  //   const {
  //     submittedIMDCoordinatorReview,
  //     submittedIMDCoordinatorReviewError,
  //     submittedIMDCoordinatorReviewLoading,
  //   } = useSubmittedIMDCoordinatorReview({ iMDCoordinatorReviewId: iMDCoordinatorReview.id });
  const router = useRouter();
  const { iM, iMError, iMLoading } = useIM(router?.query?.id);
  const {
    iMDCoordinatorSuggestion,
    iMDCoordinatorSuggestionError,
    iMDCoordinatorSuggestionLoading,
  } = useIMDCoordinatorSuggestion({ iMId: iM?.id });
  const {
    iMDCoordinatorSuggestionItems,
    iMDCoordinatorSuggestionItemsError,
    iMDCoordinatorSuggestionItemsLoading,
    refreshIMDCoordinatorSuggestionItems,
  } = useIMDCoordinatorSuggestionItems({
    iMDCoordinatorSuggestionId: iMDCoordinatorSuggestion?.id,
  });

  async function handleSubmit(values) {
    return frontendCreateIMDCoordinatorSuggestionItem({
      iMDCoordinatorSuggestionId: iMDCoordinatorSuggestion.id,
      value: values.value,
      pageNumber: values.pageNumber,
      remarks: values.remarks,
    }).then(() => {
      refreshIMDCoordinatorSuggestionItems();
    });
  }

  async function handleSubmitSuggestion() {
    return frontendCreateSubmittedIMDCoordinatorSuggestion({
      iMDCoordinatorSuggestionId: iMDCoordinatorSuggestion.id,
    });
  }

  //   useEffect(() => {
  //     console.log({ submittedIMDCoordinatorReview });
  //   }, [submittedIMDCoordinatorReview]);

  useEffect(() => {
    console.log({ iMDCoordinatorSuggestion });
  }, [iMDCoordinatorSuggestion]);

  useEffect(() => {
    console.log({ iMDCoordinatorSuggestionItems });
  }, [iMDCoordinatorSuggestionItems]);

  return (
    <Suggestion
      showChairpersonSuggestion
      showCoordinatorSuggestion
      showPeerSuggestion
      handleSubmit={handleSubmit}
      onFinish={() => {
        handleSubmitSuggestion().then(() => onFinish());
      }}
      onPrevious={onPrevious}
      iM={iM}
      title='IMD Coordinator Suggestion'
    >
      {iMDCoordinatorSuggestionItems.map((iMDCoordinatorSuggestionItem) => (
        <IMDCoordinatorSuggestionItem
          key={iMDCoordinatorSuggestionItem.id}
          iMDCoordinatorSuggestionItem={iMDCoordinatorSuggestionItem}
        />
      ))}
    </Suggestion>
  );
}
