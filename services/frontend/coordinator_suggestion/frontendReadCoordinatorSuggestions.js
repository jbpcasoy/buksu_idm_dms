import axios from "axios";

export default async function frontendReadCoordinatorSuggestions({
  submittedCoordinatorReviewId,
}) {
  try {
    const coordinatorSuggestions = await axios.get(
      "/api/coordinator_suggestion",
      {
        params: {
          submittedCoordinatorReviewId,
        },
      }
    );
    return coordinatorSuggestions.data;
  } catch (error) {
    throw error;
  }
}
