import axios from "axios";

export default async function adminCreateIMReviewSection({ title }) {
  try {
    const iMReviewSection = await axios.post("/api/im_review_section", {
      title,
    });
    return iMReviewSection.data;
  } catch (error) {
    throw error;
  }
}
