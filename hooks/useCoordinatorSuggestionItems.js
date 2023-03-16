import frontendReadCoordinatorSuggestionItems from "@/services/frontend/coordinator_sugestion_item/frontendReadCoordinatorSuggestionItems";
import { useEffect, useState } from "react";

export default function useCoordinatorSuggestionItems({
  coordinatorSuggestionId,
}) {
  const [coordinatorSuggestionItems, setCoordinatorSuggestionItems] = useState(
    []
  );
  const [
    coordinatorSuggestionItemsLoading,
    setCoordinatorSuggestionItemsLoading,
  ] = useState(true);
  const [coordinatorSuggestionItemsError, setCoordinatorSuggestionItemsError] =
    useState(null);
  const [refreshFlag, setRefreshFlag] = useState(0);
  function refreshCoordinatorSuggestionItems() {
    setRefreshFlag((prev) => prev + 1);
  }

  useEffect(() => {
    if (!coordinatorSuggestionId) return;
    let isSubscribed = true;

    frontendReadCoordinatorSuggestionItems({ coordinatorSuggestionId })
      .then((res) => {
        if (!isSubscribed) return;
        setCoordinatorSuggestionItems(res.data);
        setCoordinatorSuggestionItemsLoading(false);
      })
      .catch((err) => {
        if (!isSubscribed) return;
        setCoordinatorSuggestionItemsError(err);
        setCoordinatorSuggestionItemsLoading(false);
      });

    return () => {
      isSubscribed = false;
    };
  }, [coordinatorSuggestionId, refreshFlag]);

  return {
    coordinatorSuggestionItems,
    coordinatorSuggestionItemsLoading,
    coordinatorSuggestionItemsError,
    refreshCoordinatorSuggestionItems,
  };
}
