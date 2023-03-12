import axios from "axios";

export default async function frontendCreateSubmittedCoordinatorReview({
  coordinatorReviewId,
}) {
  try {
    const submittedCoordinatorReview = await axios.post(
      "/api/submitted_coordinator_review",
      {
        coordinatorReviewId,
      }
    );

    return submittedCoordinatorReview;
  } catch (error) {
    throw error;
  }
}
