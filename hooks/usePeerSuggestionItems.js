import frontendReadPeerSuggestionItems from "@/services/frontend/peer_suggestion_item/frontendReadPeerSuggestionItems";
import { useEffect, useState } from "react";

export default function usePeerSuggestionItems({ peerSuggestionId }) {
  const [peerSuggestionItems, setPeerSuggestionItems] = useState([]);
  const [peerSuggestionItemsLoading, setPeerSuggestionItemsLoading] =
    useState(true);
  const [peerSuggestionItemsError, setPeerSuggestionItemsError] =
    useState(null);
  const [refreshFlag, setRefreshFlag] = useState(0);
  function refreshPeerSuggestionItems() {
    setRefreshFlag((prev) => prev + 1);
  }

  useEffect(() => {
    if (!peerSuggestionId) return;
    let isSubscribed = true;

    frontendReadPeerSuggestionItems({ peerSuggestionId })
      .then((res) => {
        if (!isSubscribed) return;
        setPeerSuggestionItems(res.data);
        setPeerSuggestionItemsLoading(false);
      })
      .catch((err) => {
        if (!isSubscribed) return;
        setPeerSuggestionItemsError(err);
        setPeerSuggestionItemsLoading(false);
      });

    return () => {
      isSubscribed = false;
    };
  }, [peerSuggestionId, refreshFlag]);

  return {
    peerSuggestionItems,
    peerSuggestionItemsLoading,
    peerSuggestionItemsError,
    refreshPeerSuggestionItems,
  };
}
