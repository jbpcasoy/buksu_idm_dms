import axios from "axios";

export default async function frontendCreateCoordinatorReview({ iMId }) {
  try {
    const coordinatorReview = await axios.post("/api/coordinator_review", {
      iMId,
    });
    return coordinatorReview.data;
  } catch (error) {
    throw error;
  }
}
