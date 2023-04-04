import frontendUpdateIMDCoordinatorSuggestionItem from "@/services/frontend/imd_coordinator_suggestion_item/frontendUpdateIMDCoordinatorSuggestionItem";
import SuggestionItemView from "@/views/suggestions/SuggestionItemView";
import { useState } from "react";

export default function IMDCoordinatorSuggestionItemView({
  iMDCoordinatorSuggestionItem,
  viewOnly,
}) {
  const [iMDSuggestionItemData, setIMDCoordinatorSuggestionItemData] = useState(
    iMDCoordinatorSuggestionItem
  );

  async function handleUpdate(values) {
    return frontendUpdateIMDCoordinatorSuggestionItem(
      iMDCoordinatorSuggestionItem.id,
      {
        actionTaken: values.actionTaken,
      }
    ).then((res) => {
      setIMDCoordinatorSuggestionItemData(res);
    });
  }

  if (!iMDSuggestionItemData) return null;

  return (
    <SuggestionItemView
      viewOnly={viewOnly}
      suggestionItemId={iMDSuggestionItemData.id}
      actionTaken={iMDSuggestionItemData.actionTaken}
      pageNumber={iMDSuggestionItemData.pageNumber}
      remarks={iMDSuggestionItemData.remarks}
      value={iMDSuggestionItemData.value}
      onEdit={handleUpdate}
    />
  );
}
