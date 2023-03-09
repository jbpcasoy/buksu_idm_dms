import axios from "axios";

export default async function frontendCreateChairpersonReview({ iMId }) {
  try {
    const chairpersonReview = await axios.post("/api/chairperson_review", {
      iMId,
    });
    return chairpersonReview.data;
  } catch (error) {
    throw error;
  }
}
