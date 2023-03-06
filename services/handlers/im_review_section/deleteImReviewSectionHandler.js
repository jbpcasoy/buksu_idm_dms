import deleteImReviewSection from "@/services/api/im_review_section/deleteImReviewSection";

export default async function deleteImReviewSectionHandler(req, res) {
  const { id } = req.query;

  const iMReviewSection = await deleteImReviewSection(id);
  return res.status(200).json(iMReviewSection);
}
