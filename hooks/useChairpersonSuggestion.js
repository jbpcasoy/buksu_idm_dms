import frontendCreateChairpersonSuggestion from "@/services/frontend/chairperson_suggestion/frontendCreateChairpersonSuggestion";
import frontendReadChairpersonSuggestions from "@/services/frontend/chairperson_suggestion/frontendReadChairpersonSuggestions";
import { useEffect, useState } from "react";

export default function useChairpersonSuggestion({
  submittedChairpersonReviewId,
}) {
  const [chairpersonSuggestion, setChairpersonSuggestion] = useState(null);
  const [chairpersonSuggestionLoading, setChairpersonSuggestionLoading] =
    useState(true);
  const [chairpersonSuggestionError, setChairpersonSuggestionError] =
    useState(null);

  useEffect(() => {
    if (!submittedChairpersonReviewId) return;
    let isSubscribed = true;

    frontendCreateChairpersonSuggestion({
      submittedChairpersonReviewId,
    })
      .then((res) => {
        if (!isSubscribed) return;
        setChairpersonSuggestion(res);
        setChairpersonSuggestionLoading(false);
      })
      .catch((err) => {
        if (!isSubscribed) return;
        frontendReadChairpersonSuggestions({
          submittedChairpersonReviewId,
        })
          .then((res) => {
            if (!isSubscribed) return;
            setChairpersonSuggestion(res.data[0]);
            setChairpersonSuggestionLoading(false);
          })
          .catch((err) => {
            if (!isSubscribed) return;
            setChairpersonSuggestionError(err);
            setChairpersonSuggestionLoading(false);
          });
      });

    return () => {
      isSubscribed = false;
    };
  }, [submittedChairpersonReviewId]);

  return {
    chairpersonSuggestion,
    chairpersonSuggestionLoading,
    chairpersonSuggestionError,
  };
}
