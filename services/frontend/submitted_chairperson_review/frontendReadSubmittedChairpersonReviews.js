import axios from "axios";

export default async function frontendReadSubmittedChairpersonReviews({
  chairpersonReviewId,
}) {
  try {
    const submittedChairpersonReviews = await axios.get(
      "/api/submitted_chairperson_review",
      {
        params: {
          chairpersonReviewId,
        },
      }
    );
    return submittedChairpersonReviews.data;
  } catch (error) {
    throw error;
  }
}
