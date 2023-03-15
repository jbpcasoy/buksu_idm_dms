import SuggestionDeleteModal from "@/components/review/suggestion/SuggestionDeleteModal";
import SuggestionEditModal from "@/components/review/suggestion/SuggestionEditModal";
import { initDropdowns } from "flowbite";
import { useEffect } from "react";

export default function SuggestionItemMenu({
  value,
  pageNumber,
  remarks,
  suggestionItemId,
  onEdit,
  onDelete,
}) {
  useEffect(() => {
    initDropdowns();
  });

  return (
    <div>
      <div class='inline-flex space-x-1'>
        <SuggestionEditModal
          value={value}
          pageNumber={pageNumber}
          suggestionItemId={suggestionItemId}
          remarks={remarks}
          onSubmit={onEdit}
        />
        <SuggestionDeleteModal
          suggestionItemId={suggestionItemId}
          onAgree={onDelete}
        />
      </div>
    </div>
  );
}
