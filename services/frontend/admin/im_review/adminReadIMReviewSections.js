import axios from "axios";

export default async function adminReadIMReviewSections() {
  try {
    const iMReviewSections = await axios.get("/api/im_review_section");
    return iMReviewSections.data;
  } catch (error) {
    throw error;
  }
}
