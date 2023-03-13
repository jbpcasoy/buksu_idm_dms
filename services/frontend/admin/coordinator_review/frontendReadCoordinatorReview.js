import axios from "axios";

export default async function frontendReadCoordinatorReview(id) {
  try {
    const coordinatorReview = await axios.get(`/api/coordinator_review/${id}`);
    return coordinatorReview.data;
  } catch (error) {
    throw error;
  }
}
