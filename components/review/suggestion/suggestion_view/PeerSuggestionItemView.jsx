import frontendUpdatePeerSuggestionItem from "@/services/frontend/peer_suggestion_item/frontendUpdatePeerSuggestionItem";
import SuggestionItemView from "@/views/suggestions/SuggestionItemView";
import { useState } from "react";

export default function PeerSuggestionItemView({
  peerSuggestionItem,
  viewOnly,
}) {
  const [peerSuggestionItemData, setPeerSuggestionItemData] =
    useState(peerSuggestionItem);

  async function handleUpdate(values) {
    return frontendUpdatePeerSuggestionItem(peerSuggestionItem.id, {
      actionTaken: values.actionTaken,
    }).then((res) => {
      setPeerSuggestionItemData(res);
    });
  }

  if (!peerSuggestionItemData) return null;

  return (
    <SuggestionItemView
      viewOnly={viewOnly}
      suggestionItemId={peerSuggestionItemData.id}
      actionTaken={peerSuggestionItemData.actionTaken}
      pageNumber={peerSuggestionItemData.pageNumber}
      remarks={peerSuggestionItemData.remarks}
      value={peerSuggestionItemData.value}
      onEdit={handleUpdate}
    />
  );
}
