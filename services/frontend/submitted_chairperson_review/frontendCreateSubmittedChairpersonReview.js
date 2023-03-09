import axios from "axios";

export default async function frontendCreateSubmittedChairpersonReview({
  chairpersonReviewId,
}) {
  try {
    const submittedChairpersonReview = await axios.post(
      "/api/submitted_chairperson_review",
      {
        chairpersonReviewId,
      }
    );
    return submittedChairpersonReview.data;
  } catch (error) {
    throw error;
  }
}
