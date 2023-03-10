import axios from "axios";

export default async function frontendCreateCoordinatorReviewItem({
  questionId,
  answer,
  coordinatorReviewId,
}) {
  try {
    const coordinatorReviewItem = await axios.post(
      "/api/coordinator_review_item",
      {
        questionId,
        answer,
        coordinatorReviewId,
      }
    );
    return coordinatorReviewItem.data;
  } catch (error) {
    throw error;
  }
}
