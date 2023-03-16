import frontendDeleteChairpersonSuggestionItem from "@/services/frontend/chairperson_suggestion_item/frontendDeleteChairpersonSuggestionItem";
import frontendUpdateChairpersonSuggestionItem from "@/services/frontend/chairperson_suggestion_item/frontendUpdateSuggestionItem";
import SuggestionItem from "@/views/suggestions/SuggestionItem";
import { useState } from "react";

export default function ChairpersonSuggestionItem({
  chairpersonSuggestionItem,
}) {
  const [chairpersonSuggestionItemData, setChairpersonSuggestionItemData] =
    useState(chairpersonSuggestionItem);

  async function handleEdit(values) {
    return frontendUpdateChairpersonSuggestionItem(
      chairpersonSuggestionItem.id,
      {
        value: values.value,
        remarks: values.remarks,
        pageNumber: values.pageNumber,
      }
    ).then((res) => {
      setChairpersonSuggestionItemData(res);
    });
  }

  async function handleDelete() {
    return frontendDeleteChairpersonSuggestionItem(
      chairpersonSuggestionItem.id
    ).then(() => setChairpersonSuggestionItemData(null));
  }

  if (!chairpersonSuggestionItemData) return null;

  return (
    <SuggestionItem
      suggestionItemId={chairpersonSuggestionItemData.id}
      actionTaken={chairpersonSuggestionItemData.actionTaken}
      pageNumber={chairpersonSuggestionItemData.pageNumber}
      remarks={chairpersonSuggestionItemData.remarks}
      value={chairpersonSuggestionItemData.value}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}
