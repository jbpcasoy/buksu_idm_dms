import axios from "axios";

export default async function frontendUpdateCoordinatorReviewItem(
  id,
  { answer }
) {
  try {
    const coordinatorReviewItem = await axios.put(
      `/api/coordinator_review_item/${id}`,
      {
        answer,
      }
    );
    return coordinatorReviewItem.data;
  } catch (error) {
    throw error;
  }
}
