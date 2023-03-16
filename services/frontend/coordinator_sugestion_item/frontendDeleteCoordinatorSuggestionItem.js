import axios from "axios";

export default async function frontendDeleteCoordinatorSuggestionItem(id) {
  try {
    const coordinatorSuggestionItem = await axios.delete(
      `/api/coordinator_suggestion_item/${id}`
    );
    return coordinatorSuggestionItem;
  } catch (error) {
    throw error;
  }
}
