import readChairpersonReview from "@/services/api/chairperson_review/readChairpersonReview";

export default async function getChairpersonReviewHandler(req, res) {
  const { id } = req.query;
  const chairpersonReview = await readChairpersonReview(id);
  return res.status(200).json(chairpersonReview);
}
