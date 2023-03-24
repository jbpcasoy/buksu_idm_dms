import axios from "axios";

export default async function frontendCreateSubmittedCoordinatorSuggestion({
  coordinatorSuggestionId,
}) {
  try {
    const submittedCoordinatorSuggestion = await axios.post(
      "/api/submitted_coordinator_suggestion",
      {
        coordinatorSuggestionId,
      }
    );
    return submittedCoordinatorSuggestion.data;
  } catch (error) {
    throw error;
  }
}
