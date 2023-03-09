import readSubmittedCoordinatorReview from "@/services/api/submitted_coordinator_review/readSubmittedCoordinatorReview";

export default async function getSubmittedCoordinatorReviewHandler(req, res) {
  const { id } = req.query;

  const submittedCoordinatorReview = await readSubmittedCoordinatorReview(id);
  return res.status(200).json(submittedCoordinatorReview);
}
