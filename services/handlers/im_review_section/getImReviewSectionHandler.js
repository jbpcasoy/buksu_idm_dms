import readIMReviewSection from "@/services/api/im_review_section/readIMReviewSection";

export default async function getImReviewSectionHandler(req, res) {
  const { id } = req.query;

  const imReviewSection = await readIMReviewSection(id);
  return res.status(200).json(imReviewSection);
}
