import axios from "axios";

export default async function frontendReadCoordinatorReviewItems({
  coordinatorReviewId,
}) {
  try {
    const coordinatorReviewItems = await axios.get(
      "/api/coordinator_review_item",
      {
        params: {
          coordinatorReviewId,
        },
      }
    );
    return coordinatorReviewItems.data;
  } catch (error) {
    throw error;
  }
}
