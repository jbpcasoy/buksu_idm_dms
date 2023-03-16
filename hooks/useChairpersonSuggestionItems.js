import frontendReadChairpersonSuggestionItems from "@/services/frontend/chairperson_suggestion_item/frontendReadChairpersonSuggestionItems";
import { useEffect, useState } from "react";

export default function useChairpersonSuggestionItems({
  chairpersonSuggestionId,
}) {
  const [chairpersonSuggestionItems, setChairpersonSuggestionItems] = useState(
    []
  );
  const [
    chairpersonSuggestionItemsLoading,
    setChairpersonSuggestionItemsLoading,
  ] = useState(true);
  const [chairpersonSuggestionItemsError, setChairpersonSuggestionItemsError] =
    useState(null);
  const [refreshFlag, setRefreshFlag] = useState(0);
  function refreshChairpersonSuggestionItems() {
    setRefreshFlag((prev) => prev + 1);
  }

  useEffect(() => {
    if (!chairpersonSuggestionId) return;
    let isSubscribed = true;

    frontendReadChairpersonSuggestionItems({ chairpersonSuggestionId })
      .then((res) => {
        if (!isSubscribed) return;
        setChairpersonSuggestionItems(res.data);
        setChairpersonSuggestionItemsLoading(false);
      })
      .catch((err) => {
        if (!isSubscribed) return;
        setChairpersonSuggestionItemsError(err);
        setChairpersonSuggestionItemsLoading(false);
      });

    return () => {
      isSubscribed = false;
    };
  }, [chairpersonSuggestionId, refreshFlag]);

  return {
    chairpersonSuggestionItems,
    chairpersonSuggestionItemsLoading,
    chairpersonSuggestionItemsError,
    refreshChairpersonSuggestionItems,
  };
}
