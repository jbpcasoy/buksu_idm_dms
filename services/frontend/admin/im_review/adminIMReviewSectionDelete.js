import axios from "axios";

export default async function adminIMReviewSectionDelete(id) {
  try {
    const iMReviewSection = await axios.delete(`/api/im_review_section/${id}`);
    return iMReviewSection;
  } catch (error) {
    throw error;
  }
}
