import frontendReadIMDCoordinatorSuggestionItems from "@/services/frontend/imd_coordinator_suggestion_item/frontendReadIMDCoordinatorSuggestionItems";
import { useEffect, useState } from "react";

export default function useIMDCoordinatorSuggestionItems({
  iMDCoordinatorSuggestionId,
}) {
  const [iMDCoordinatorSuggestionItems, setIMDCoordinatorSuggestionItems] =
    useState([]);
  const [
    iMDCoordinatorSuggestionItemsLoading,
    setIMDCoordinatorSuggestionItemsLoading,
  ] = useState(true);
  const [
    iMDCoordinatorSuggestionItemsError,
    setIMDCoordinatorSuggestionItemsError,
  ] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(0);
  function refreshIMDCoordinatorSuggestionItems() {
    setRefreshFlag((prev) => prev + 1);
  }

  useEffect(() => {
    if (!iMDCoordinatorSuggestionId) return;
    let isSubscribed = true;

    frontendReadIMDCoordinatorSuggestionItems({
      iMDCoordinatorSuggestionId,
    })
      .then((res) => {
        if (!isSubscribed) return;
        setIMDCoordinatorSuggestionItems(res.data);
        setIMDCoordinatorSuggestionItemsLoading(false);
      })
      .catch((err) => {
        if (!isSubscribed) return;
        setIMDCoordinatorSuggestionItemsError(err);
        setIMDCoordinatorSuggestionItemsLoading(false);
      });

    return () => {
      isSubscribed = false;
    };
  }, [iMDCoordinatorSuggestionId, refreshFlag]);

  return {
    iMDCoordinatorSuggestionItems,
    iMDCoordinatorSuggestionItemsLoading,
    iMDCoordinatorSuggestionItemsError,
    refreshIMDCoordinatorSuggestionItems,
  };
}
