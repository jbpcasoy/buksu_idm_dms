import useChairpersonSuggestion from "@/hooks/useChairpersonSuggestion";
import useChairpersonSuggestionItems from "@/hooks/useChairpersonSuggestionItems";
import useIM from "@/hooks/useIM";
import useSubmittedChairpersonReview from "@/hooks/useSubmittedChairpersonReview";
import frontendCreateChairpersonSuggestionItem from "@/services/frontend/chairperson_suggestion_item/frontendCreateChairpersonSuggestionItem";
import frontendCreateSubmittedChairpersonSuggestion from "@/services/frontend/submitted_chairperson_suggestion/frontendCreateSubmittedChairpersonSuggestion";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import ChairpersonSuggestionItem from "./ChairpersonSuggestionItem";
import Suggestion from "./Suggestion";

export default function ChairpersonSuggestion({
  chairpersonReview,
  onFinish,
  onPrevious,
}) {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
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

  async function handleSubmitSuggestion() {
    return frontendCreateSubmittedChairpersonSuggestion({
      chairpersonSuggestionId: chairpersonSuggestion.id,
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
      onFinish={async () => {
        return handleSubmitSuggestion()
          .catch((err) => console.error(err))
          .finally(() => {
            onFinish();
            enqueueSnackbar({
              message: "Suggestions submitted successfully",
              variant: "success",
            });
          });
      }}
      onPrevious={onPrevious}
      iM={iM}
      title='Chairperson Suggestion'
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
