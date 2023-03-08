import deleteSubmittedChairpersonReview from "@/services/api/submitted_chairperson_review/deleteSubmittedChairpersonReview";

export default async function deleteSubmittedChairpersonReviewHandler(
  req,
  res
) {
  const { id } = req.query;

  const submittedChairpersonReview = await deleteSubmittedChairpersonReview(id);
  return res.status(200).json(submittedChairpersonReview);
}
