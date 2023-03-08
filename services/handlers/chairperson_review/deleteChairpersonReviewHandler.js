import deleteChairpersonReview from "@/services/api/chairperson_review/deleteChairpersonReview";

export default async function deleteChairpersonReviewHandler(req, res) {
  const { id } = req.query;

  const chairpersonReview = await deleteChairpersonReview(id);
  return res.status(200).json(chairpersonReview);
}
