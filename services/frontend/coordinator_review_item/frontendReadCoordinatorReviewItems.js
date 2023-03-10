import axios from "axios";

export default async function frontendReadCoordinatorReviewItems({
  coordinatorReviewId,
  questionId,
}) {
  try {
    const coordinatorReviewItems = await axios.get(
      "/api/coordinator_review_item",
      {
        params: {
          coordinatorReviewId,
          questionId,
        },
      }
    );

    return coordinatorReviewItems.data;
  } catch (error) {
    throw error;
  }
}
