import axios from "axios";

export default async function frontendReadChairpersonReviews({
  iMId,
  chairpersonId,
}) {
  try {
    const chairpersonReviews = await axios.get("/api/chairperson_review", {
      params: {
        iMId,
        chairpersonId,
      },
    });
    return chairpersonReviews.data;
  } catch (error) {
    throw error;
  }
}
