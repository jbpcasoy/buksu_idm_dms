import useIMDCoordinatorSuggestion from "@/hooks/imd_coordinator_suggestion/useIMDCoordinatorSuggestion";
import useIMDCoordinatorSuggestionItems from "@/hooks/imd_coordinator_suggestion/useIMDCoordinatorSuggestionItems";
import { useEffect } from "react";
import AdminSuggestions from "./AdminSuggestions";

export default function AdminIMDCoordinatorSuggestion({ iMId }) {
  //   const {
  //     submittedIMDCoordinatorReview,
  //     submittedIMDCoordinatorReviewError,
  //     submittedIMDCoordinatorReviewLoading,
  //   } = useSubmittedIMDCoordinatorReview({ iMDCoordinatorReviewId: iMDCoordinatorReview.id });
  const {
    iMDCoordinatorSuggestion,
    iMDCoordinatorSuggestionError,
    iMDCoordinatorSuggestionLoading,
  } = useIMDCoordinatorSuggestion({
    iMId: iMId,
  });
  const {
    iMDCoordinatorSuggestionItems,
    iMDCoordinatorSuggestionItemsError,
    iMDCoordinatorSuggestionItemsLoading,
    refreshIMDCoordinatorSuggestionItems,
  } = useIMDCoordinatorSuggestionItems({
    iMDCoordinatorSuggestionId: iMDCoordinatorSuggestion?.id,
  });

  useEffect(() => {
    console.log({ iMDCoordinatorSuggestionItems });
  }, [iMDCoordinatorSuggestionItems]);

  return (
    <AdminSuggestions
      suggestionItemsLoading={iMDCoordinatorSuggestionItemsLoading}
      title='IMD Coordinator Suggestions'
      suggestionItems={iMDCoordinatorSuggestionItems}
    />
  );
}
