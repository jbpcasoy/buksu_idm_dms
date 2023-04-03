import axios from "axios";

export default async function frontendCreateIMDCoordinatorSuggestionItem({
  iMDCoordinatorSuggestionId,
  value,
  pageNumber,
  remarks,
}) {
  try {
    const iMDCoordinatorSuggestionItem = await axios.post(
      "/api/imd_coordinator_suggestion_item",
      {
        iMDCoordinatorSuggestionId,
        value,
        pageNumber,
        remarks,
      }
    );

    return iMDCoordinatorSuggestionItem.data;
  } catch (error) {
    throw error;
  }
}
