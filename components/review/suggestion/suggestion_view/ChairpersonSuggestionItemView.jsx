import frontendUpdateChairpersonSuggestionItem from "@/services/frontend/chairperson_suggestion_item/frontendUpdateSuggestionItem";
import SuggestionItemView from "@/views/suggestions/SuggestionItemView";
import { useState } from "react";

export default function ChairpersonSuggestionItemView({
  chairpersonSuggestionItem,
}) {
  const [chairpersonSuggestionItemData, setChairpersonSuggestionItemData] =
    useState(chairpersonSuggestionItem);

  async function handleUpdate(values) {
    return frontendUpdateChairpersonSuggestionItem(
      chairpersonSuggestionItem.id,
      {
        actionTaken: values.actionTaken,
      }
    ).then((res) => {
      setChairpersonSuggestionItemData(res);
    });
  }

  if (!chairpersonSuggestionItemData) return null;

  return (
    <SuggestionItemView
      suggestionItemId={chairpersonSuggestionItemData.id}
      actionTaken={chairpersonSuggestionItemData.actionTaken}
      pageNumber={chairpersonSuggestionItemData.pageNumber}
      remarks={chairpersonSuggestionItemData.remarks}
      value={chairpersonSuggestionItemData.value}
      onEdit={handleUpdate}
    />
  );
}
