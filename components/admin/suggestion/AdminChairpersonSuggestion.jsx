import useChairpersonSuggestion from "@/hooks/useChairpersonSuggestion";
import useChairpersonSuggestionItems from "@/hooks/useChairpersonSuggestionItems";
import useSubmittedChairpersonReview from "@/hooks/useSubmittedChairpersonReview";
import { useEffect } from "react";
import AdminSuggestions from "./AdminSuggestions";

export default function AdminChairpersonSuggestion({ chairpersonReview }) {
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

  useEffect(() => {
    console.log({ chairpersonSuggestionItems });
  }, [chairpersonSuggestionItems]);

  return (
    <AdminSuggestions
      suggestionItemsLoading={chairpersonSuggestionItemsLoading}
      title='Chairperson Suggestions'
      suggestionItems={chairpersonSuggestionItems}
    />
  );
}
