import axios from "axios";

export default async function frontendReadChairpersonReviewItems({
  questionId,
  chairpersonReviewId,
}) {
  try {
    const chairpersonReviewItems = await axios.get(
      "/api/chairperson_review_item",
      {
        params: {
          questionId,
          chairpersonReviewId,
        },
      }
    );
    return chairpersonReviewItems.data;
  } catch (error) {
    throw error;
  }
}
