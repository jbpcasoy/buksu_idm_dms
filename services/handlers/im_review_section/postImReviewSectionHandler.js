import createIMReviewSection from "@/services/api/im_review_section/createIMReviewSection";

export default async function postImReviewSectionHandler(req, res) {
  const { title } = req.body;

  const iMReviewSection = await createIMReviewSection({ title });
  return res.status(201).json(iMReviewSection);
}
