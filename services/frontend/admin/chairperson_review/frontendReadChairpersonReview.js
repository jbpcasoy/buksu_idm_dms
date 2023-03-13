import axios from "axios";

export default async function frontendReadChairpersonReview(id) {
  try {
    const chairpersonReview = await axios.get(`/api/chairperson_review/${id}`);
    return chairpersonReview.data;
  } catch (error) {
    throw error;
  }
}
