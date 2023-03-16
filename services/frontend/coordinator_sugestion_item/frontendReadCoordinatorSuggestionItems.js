import axios from "axios";

export default async function frontendReadCoordinatorSuggestionItems({
  coordinatorSuggestionId,
}) {
  try {
    const coordinatorSuggestionItems = await axios.get(
      "/api/coordinator_suggestion_item",
      {
        params: {
          coordinatorSuggestionId,
        },
      }
    );
    return coordinatorSuggestionItems.data;
  } catch (error) {
    throw error;
  }
}
