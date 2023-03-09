import axios from "axios";

export default async function frontendCreateChairpersonReviewItem({
  questionId,
  answer,
  chairpersonReviewId,
}) {
  try {
    const chairpersonReview = await axios.post("/api/chairperson_review_item", {
      questionId,
      answer,
      chairpersonReviewId,
    });
    return chairpersonReview.data;
  } catch (error) {
    throw error;
  }
}
