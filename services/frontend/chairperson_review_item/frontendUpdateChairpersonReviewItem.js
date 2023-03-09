import axios from "axios";

export default async function frontendUpdateChairpersonReviewItem(
  id,
  { answer }
) {
  try {
    const chairpersonReviewItem = await axios.put(
      `/api/chairperson_review_item/${id}`,
      {
        answer,
      }
    );
    return chairpersonReviewItem.data;
  } catch (error) {
    throw error;
  }
}
