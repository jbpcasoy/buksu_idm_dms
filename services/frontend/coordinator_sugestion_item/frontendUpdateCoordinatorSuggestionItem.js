import axios from "axios";

export default async function frontendUpdateCoordinatorSuggestionItem(
  id,
  { value, pageNumber, actionTaken, remarks }
) {
  try {
    const coordinatorSuggestionItem = await axios.put(
      `/api/coordinator_suggestion_item/${id}`,
      {
        value,
        pageNumber,
        remarks,
        actionTaken,
      }
    );
    return coordinatorSuggestionItem.data;
  } catch (error) {
    throw error;
  }
}
