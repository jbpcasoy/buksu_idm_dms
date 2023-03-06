import axios from "axios";

export default async function adminIMReviewSectionEdit(id, { title }) {
  try {
    const iMReviewSection = await axios.put(`/api/im_review_section/${id}`, {
      title,
    });
    return iMReviewSection.data;
  } catch (error) {
    throw error;
  }
}
