import frontendCreateCoordinatorSuggestion from "@/services/frontend/coordinator_suggestion/frontendCreateCoordinatorSuggestion";
import frontendReadCoordinatorSuggestions from "@/services/frontend/coordinator_suggestion/frontendReadCoordinatorSuggestions";
import { useEffect, useState } from "react";

export default function useCoordinatorSuggestion({
  submittedCoordinatorReviewId,
}) {
  const [coordinatorSuggestion, setCoordinatorSuggestion] = useState(null);
  const [coordinatorSuggestionLoading, setCoordinatorSuggestionLoading] =
    useState(true);
  const [coordinatorSuggestionError, setCoordinatorSuggestionError] =
    useState(null);

  useEffect(() => {
    if (!submittedCoordinatorReviewId) return;
    let isSubscribed = true;

    frontendCreateCoordinatorSuggestion({
      submittedCoordinatorReviewId,
    })
      .then((res) => {
        if (!isSubscribed) return;
        setCoordinatorSuggestion(res);
        setCoordinatorSuggestionLoading(false);
      })
      .catch((err) => {
        if (!isSubscribed) return;
        frontendReadCoordinatorSuggestions({
          submittedCoordinatorReviewId,
        })
          .then((res) => {
            if (!isSubscribed) return;
            setCoordinatorSuggestion(res.data[0]);
            setCoordinatorSuggestionLoading(false);
          })
          .catch((err) => {
            if (!isSubscribed) return;
            setCoordinatorSuggestionError(err);
            setCoordinatorSuggestionLoading(false);
          });
      });

    return () => {
      isSubscribed = false;
    };
  }, [submittedCoordinatorReviewId]);

  return {
    coordinatorSuggestion,
    coordinatorSuggestionLoading,
    coordinatorSuggestionError,
  };
}
