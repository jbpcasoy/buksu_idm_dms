import frontendDeleteCoordinatorSuggestionItem from "@/services/frontend/coordinator_sugestion_item/frontendDeleteCoordinatorSuggestionItem";
import frontendUpdateCoordinatorSuggestionItem from "@/services/frontend/coordinator_sugestion_item/frontendUpdateCoordinatorSuggestionItem";
import SuggestionItem from "@/views/suggestions/SuggestionItem";
import { useState } from "react";

export default function CoordinatorSuggestionItem({
  coordinatorSuggestionItem,
}) {
  const [coordinatorSuggestionItemData, setCoordinatorSuggestionItemData] =
    useState(coordinatorSuggestionItem);

  async function handleEdit(values) {
    return frontendUpdateCoordinatorSuggestionItem(
      coordinatorSuggestionItem.id,
      {
        value: values.value,
        remarks: values.remarks,
        pageNumber: values.pageNumber,
      }
    ).then((res) => {
      setCoordinatorSuggestionItemData(res);
    });
  }

  async function handleDelete() {
    return frontendDeleteCoordinatorSuggestionItem(
      coordinatorSuggestionItem.id
    ).then(() => setCoordinatorSuggestionItemData(null));
  }

  if (!coordinatorSuggestionItemData) return null;

  return (
    <SuggestionItem
      suggestionItemId={coordinatorSuggestionItemData.id}
      actionTaken={coordinatorSuggestionItemData.actionTaken}
      pageNumber={coordinatorSuggestionItemData.pageNumber}
      remarks={coordinatorSuggestionItemData.remarks}
      value={coordinatorSuggestionItemData.value}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}
