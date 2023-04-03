import axios from "axios";

export default async function frontendDeleteIMDCoordinatorSuggestionItem(id) {
  try {
    const iMDCoordinatorSuggestionItem = await axios.delete(
      `/api/imd_coordinator_suggestion_item/${id}`
    );
    return iMDCoordinatorSuggestionItem.data;
  } catch (error) {
    throw error;
  }
}
