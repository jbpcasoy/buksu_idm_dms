import updateImReviewSection from "@/services/api/im_review_section/updateImReviewSection";

export default async function putImReviewSectionHandler(req, res) {
  const { id } = req.query;
  const { title } = req.body;

  const imReviewSection = await updateImReviewSection(id, { title });
  return res.status(200).json(imReviewSection);
}
