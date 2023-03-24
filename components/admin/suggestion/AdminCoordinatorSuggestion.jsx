import useCoordinatorSuggestion from "@/hooks/useCoordinatorSuggestion";
import useCoordinatorSuggestionItems from "@/hooks/useCoordinatorSuggestionItems";
import useSubmittedCoordinatorReview from "@/hooks/useSubmittedCoordinatorReview";
import { useEffect } from "react";
import AdminSuggestions from "./AdminSuggestions";

export default function AdminCoordinatorSuggestion({ coordinatorReview }) {
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

  useEffect(() => {
    console.log({ coordinatorSuggestionItems });
  }, [coordinatorSuggestionItems]);

  return (
    <AdminSuggestions
      suggestionItemsLoading={coordinatorSuggestionItemsLoading}
      title='Coordinator Suggestions'
      suggestionItems={coordinatorSuggestionItems}
    />
  );
}
