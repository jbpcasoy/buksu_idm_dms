import axios from "axios";

export default async function frontendUpdateIMDCoordinatorSuggestionItem(
  id,
  { value, remarks, pageNumber }
) {
  try {
    const iMDCoordinatorSuggestionItem = await axios.put(
      `/api/imd_coordinator_suggestion_item/${id}`,
      {
        value,
        remarks,
        pageNumber,
      }
    );
    return iMDCoordinatorSuggestionItem.data;
  } catch (error) {
    throw error;
  }
}
