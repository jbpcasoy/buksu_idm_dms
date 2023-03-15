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
      <div class='inline-flex '>
        <SuggestionEditModal
          value={value}
          pageNumber={pageNumber}
          suggestionItemId={suggestionItemId}
          remarks={remarks}
          onSubmit={onEdit}
        />
        <button
          onClick={onDelete}
          type='button'
          class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        >
          Delete
        </button>
      </div>
    </div>
  );
}
