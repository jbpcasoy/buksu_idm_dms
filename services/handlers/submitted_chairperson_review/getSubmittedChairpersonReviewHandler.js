import readSubmittedChairpersonReview from "@/services/api/submitted_chairperson_review/readSubmittedChairpersonReview";

export default async function getSubmittedChairpersonReviewHandler(req, res) {
  const { id } = req.query;

  const submittedChairpersonReview = await readSubmittedChairpersonReview(id);
  return res.status(200).json(submittedChairpersonReview);
}
