import frontendDeletePeerSuggestionItem from "@/services/frontend/peer_suggestion_item/frontendDeletePeerSuggestionItem";
import frontendUpdatePeerSuggestionItem from "@/services/frontend/peer_suggestion_item/frontendUpdatePeerSuggestionItem";
import SuggestionItem from "@/views/suggestions/SuggestionItem";
import { useState } from "react";

export default function PeerSuggestionItem({ peerSuggestionItem }) {
  const [peerSuggestionItemData, setPeerSuggestionItemData] =
    useState(peerSuggestionItem);

  async function handleEdit(values) {
    return frontendUpdatePeerSuggestionItem(peerSuggestionItem.id, {
      value: values.value,
      remarks: values.remarks,
      pageNumber: values.pageNumber,
    }).then((res) => {
      setPeerSuggestionItemData(res);
    });
  }

  async function handleDelete() {
    return frontendDeletePeerSuggestionItem(peerSuggestionItem.id).then(() =>
      setPeerSuggestionItemData(null)
    );
  }

  if (!peerSuggestionItemData) return null;

  return (
    <SuggestionItem
      suggestionItemId={peerSuggestionItemData.id}
      actionTaken={peerSuggestionItemData.actionTaken}
      pageNumber={peerSuggestionItemData.pageNumber}
      remarks={peerSuggestionItemData.remarks}
      value={peerSuggestionItemData.value}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}
