import deleteSubmittedCoordinatorReview from "@/services/api/submitted_coordinator_review/deleteSubmittedCoordinatorReview";

export default async function deleteSubmittedCoordinatorHandler(req, res) {
  const { id } = req.query;

  const submittedCoordinatorReview = await deleteSubmittedCoordinatorReview(id);
  return res.status(200).json(submittedCoordinatorReview);
}
