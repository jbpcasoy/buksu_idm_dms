import useChairpersonSuggestion from "@/hooks/useChairpersonSuggestion";
import useChairpersonSuggestionItems from "@/hooks/useChairpersonSuggestionItems";
import useIM from "@/hooks/useIM";
import useSubmittedChairpersonReview from "@/hooks/useSubmittedChairpersonReview";
import frontendCreateChairpersonSuggestionItem from "@/services/frontend/chairperson_suggestion_item/frontendCreateChairpersonSuggestionItem";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ChairpersonSuggestionItem from "./ChairpersonSuggestionItem";
import Suggestion from "./Suggestion";

export default function ChairpersonSuggestion({
  chairpersonReview,
  onFinish,
  onPrevious,
}) {
  const {
    submittedChairpersonReview,
    submittedChairpersonReviewError,
    submittedChairpersonReviewLoading,
  } = useSubmittedChairpersonReview({
    chairpersonReviewId: chairpersonReview.id,
  });
  const {
    chairpersonSuggestion,
    chairpersonSuggestionError,
    chairpersonSuggestionLoading,
  } = useChairpersonSuggestion({
    submittedChairpersonReviewId: submittedChairpersonReview?.id,
  });
  const {
    chairpersonSuggestionItems,
    chairpersonSuggestionItemsError,
    chairpersonSuggestionItemsLoading,
    refreshChairpersonSuggestionItems,
  } = useChairpersonSuggestionItems({
    chairpersonSuggestionId: chairpersonSuggestion?.id,
  });
  const router = useRouter();
  const { iM, iMError, iMLoading } = useIM(router?.query?.id);

  async function handleSubmit(values) {
    return frontendCreateChairpersonSuggestionItem({
      chairpersonSuggestionId: chairpersonSuggestion.id,
      value: values.value,
      pageNumber: values.pageNumber,
      remarks: values.remarks,
    }).then(() => {
      refreshChairpersonSuggestionItems();
    });
  }

  useEffect(() => {
    console.log({ chairpersonReview });
  }, [chairpersonReview]);

  useEffect(() => {
    console.log({ submittedChairpersonReview });
  }, [submittedChairpersonReview]);

  useEffect(() => {
    console.log({ chairpersonSuggestion });
  }, [chairpersonSuggestion]);

  useEffect(() => {
    console.log({ chairpersonSuggestionItems });
  }, [chairpersonSuggestionItems]);

  return (
    <Suggestion
      showCoordinatorSuggestion
      showPeerSuggestion
      handleSubmit={handleSubmit}
      onFinish={onFinish}
      onPrevious={onPrevious}
      iM={iM}
    >
      {chairpersonSuggestionItems.map((chairpersonSuggestionItem) => (
        <ChairpersonSuggestionItem
          key={chairpersonSuggestionItem.id}
          chairpersonSuggestionItem={chairpersonSuggestionItem}
        />
      ))}
    </Suggestion>
  );
}
