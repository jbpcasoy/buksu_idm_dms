import frontendCreateIMDCoordinatorSuggestion from "@/services/frontend/imd_coordinator_suggestion/frontendCreateIMDCoordinatorSuggestion";
import frontendReadIMDCoordinatorSuggestions from "@/services/frontend/imd_coordinator_suggestion/frontendReadIMDCoordinatorSuggestions";
import { useEffect, useState } from "react";

export default function useIMDCoordinatorSuggestion({ iMId }) {
  const [iMDCoordinatorSuggestion, setIMDCoordinatorSuggestion] =
    useState(null);
  const [iMDCoordinatorSuggestionLoading, setIMDCoordinatorSuggestionLoading] =
    useState(true);
  const [iMDCoordinatorSuggestionError, setIMDCoordinatorSuggestionError] =
    useState(null);

  useEffect(() => {
    if (!iMId) return;
    let isSubscribed = true;

    frontendCreateIMDCoordinatorSuggestion({ iMId })
      .then((res) => {
        if (!isSubscribed) return;
        setIMDCoordinatorSuggestion(res);
        setIMDCoordinatorSuggestionLoading(false);
      })
      .catch((err) => {
        if (!isSubscribed) return;
        frontendReadIMDCoordinatorSuggestions({ iMId })
          .then((res) => {
            if (!isSubscribed) return;
            setIMDCoordinatorSuggestion(res.data[0]);
            setIMDCoordinatorSuggestionLoading(false);
          })
          .catch((err) => {
            if (!isSubscribed) return;
            setIMDCoordinatorSuggestionError(err);
            setIMDCoordinatorSuggestionLoading(false);
          });
      });

    return () => {
      isSubscribed = false;
    };
  }, [iMId]);

  return {
    iMDCoordinatorSuggestion,
    iMDCoordinatorSuggestionLoading,
    iMDCoordinatorSuggestionError,
  };
}
