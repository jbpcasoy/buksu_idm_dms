import axios from "axios";

export default async function frontendReadChairpersonReviewItems({
  chairpersonReviewId,
}) {
  try {
    const chairpersonReviewItems = await axios.get(
      "/api/chairperson_review_item",
      {
        params: {
          chairpersonReviewId,
        },
      }
    );
    return chairpersonReviewItems.data;
  } catch (error) {
    throw error;
  }
}
