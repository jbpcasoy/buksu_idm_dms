import axios from "axios";

export default async function frontendCreateSubmittedIMDCoordinatorSuggestion({
  iMDCoordinatorSuggestionId,
}) {
  try {
    const submittedIMDCoordinatorSuggestion = await axios.post(
      "/api/submitted_imd_coordinator_suggestion",
      {
        iMDCoordinatorSuggestionId,
      }
    );

    return submittedIMDCoordinatorSuggestion.data;
  } catch (error) {
    throw error;
  }
}
