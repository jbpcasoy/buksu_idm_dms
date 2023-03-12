import axios from "axios";

export default async function frontendReadCoordinatorReviews({
  iMId,
  coordinatorId,
}) {
  try {
    const coordinatorReviews = await axios.get("/api/coordinator_review", {
      params: {
        iMId,
        coordinatorId,
      },
    });
    return coordinatorReviews.data;
  } catch (error) {
    throw error;
  }
}
