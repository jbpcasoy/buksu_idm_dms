import axios from "axios";

export default async function frontendUpdateCoordinatorSuggestionItem(
  id,
  { value, pageNumber, remarks }
) {
  try {
    const coordinatorSuggestionItem = await axios.put(
      `/api/coordinator_suggestion_item/${id}`,
      {
        value,
        pageNumber,
        remarks,
      }
    );
    return coordinatorSuggestionItem.data;
  } catch (error) {
    throw error;
  }
}
