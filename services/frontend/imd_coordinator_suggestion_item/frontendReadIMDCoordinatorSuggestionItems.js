import axios from "axios";

export default async function frontendReadIMDCoordinatorSuggestionItems({
  iMDCoordinatorSuggestionId,
}) {
  try {
    const iMDCoordinatorSuggestionItems = await axios.get(
      "/api/imd_coordinator_suggestion_item",
      {
        params: {
          iMDCoordinatorSuggestionId,
        },
      }
    );
    return iMDCoordinatorSuggestionItems.data;
  } catch (error) {
    throw error;
  }
}
