import frontendUpdateCoordinatorSuggestionItem from "@/services/frontend/coordinator_sugestion_item/frontendUpdateCoordinatorSuggestionItem";
import SuggestionItemView from "@/views/suggestions/SuggestionItemView";
import { useState } from "react";

export default function CoordinatorSuggestionItemView({
  viewOnly,
  coordinatorSuggestionItem,
}) {
  const [coordinatorSuggestionItemData, setCoordinatorSuggestionItemData] =
    useState(coordinatorSuggestionItem);

  async function handleUpdate(values) {
    return frontendUpdateCoordinatorSuggestionItem(
      coordinatorSuggestionItem.id,
      {
        actionTaken: values.actionTaken,
      }
    ).then((res) => {
      setCoordinatorSuggestionItemData(res);
    });
  }

  if (!coordinatorSuggestionItemData) return null;

  return (
    <SuggestionItemView
      viewOnly={viewOnly}
      suggestionItemId={coordinatorSuggestionItemData.id}
      actionTaken={coordinatorSuggestionItemData.actionTaken}
      pageNumber={coordinatorSuggestionItemData.pageNumber}
      remarks={coordinatorSuggestionItemData.remarks}
      value={coordinatorSuggestionItemData.value}
      onEdit={handleUpdate}
    />
  );
}
