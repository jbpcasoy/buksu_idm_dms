import axios from "axios";

export default async function frontendCreateCoordinatorSuggestionItem({
  coordinatorSuggestionId,
  value,
  remarks,
  pageNumber,
}) {
  try {
    const coordinatorSuggestionItem = await axios.post(
      "/api/coordinator_suggestion_item",
      {
        coordinatorSuggestionId,
        value,
        remarks,
        pageNumber,
      }
    );
    return coordinatorSuggestionItem.data;
  } catch (error) {
    throw error;
  }
}
