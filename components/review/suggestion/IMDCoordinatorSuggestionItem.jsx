import frontendDeleteIMDCoordinatorSuggestionItem from "@/services/frontend/imd_coordinator_suggestion_item/frontendDeleteIMDCoordinatorSuggestionItem";
import frontendUpdateIMDCoordinatorSuggestionItem from "@/services/frontend/imd_coordinator_suggestion_item/frontendUpdateIMDCoordinatorSuggestionItem";
import SuggestionItem from "@/views/suggestions/SuggestionItem";
import { useState } from "react";

export default function IMDCoordinatorSuggestionItem({
  iMDCoordinatorSuggestionItem,
}) {
  const [
    iMDCoordinatorSuggestionItemData,
    setIMDCoordinatorSuggestionItemData,
  ] = useState(iMDCoordinatorSuggestionItem);

  async function handleEdit(values) {
    return frontendUpdateIMDCoordinatorSuggestionItem(
      iMDCoordinatorSuggestionItem.id,
      {
        value: values.value,
        remarks: values.remarks,
        pageNumber: values.pageNumber,
      }
    ).then((res) => {
      setIMDCoordinatorSuggestionItemData(res);
    });
  }

  async function handleDelete() {
    return frontendDeleteIMDCoordinatorSuggestionItem(
      iMDCoordinatorSuggestionItem.id
    ).then(() => setIMDCoordinatorSuggestionItemData(null));
  }

  if (!iMDCoordinatorSuggestionItemData) return null;

  return (
    <SuggestionItem
      suggestionItemId={iMDCoordinatorSuggestionItemData.id}
      actionTaken={iMDCoordinatorSuggestionItemData.actionTaken}
      pageNumber={iMDCoordinatorSuggestionItemData.pageNumber}
      remarks={iMDCoordinatorSuggestionItemData.remarks}
      value={iMDCoordinatorSuggestionItemData.value}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}
