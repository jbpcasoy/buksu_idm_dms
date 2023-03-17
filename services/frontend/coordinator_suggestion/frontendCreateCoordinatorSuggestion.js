import axios from "axios";

export default async function frontendCreateCoordinatorSuggestion({
  submittedCoordinatorReviewId,
}) {
  try {
    const coordinatorSuggestion = await axios.post(
      "/api/coordinator_suggestion",
      {
        submittedCoordinatorReviewId,
      }
    );

    return coordinatorSuggestion.data;
  } catch (error) {
    throw error;
  }
}
