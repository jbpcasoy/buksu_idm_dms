import axios from "axios";

export default async function frontendReadSubmittedCoordinatorReviews({
  coordinatorReviewId,
}) {
  try {
    const submittedCoordinatorReviews = await axios.get(
      "/api/submitted_coordinator_review",
      {
        params: {
          coordinatorReviewId,
        },
      }
    );
    return submittedCoordinatorReviews.data;
  } catch (error) {
    throw error;
  }
}
