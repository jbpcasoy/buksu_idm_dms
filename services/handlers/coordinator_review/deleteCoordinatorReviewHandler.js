import deleteCoordinatorReview from "@/services/api/coordinator_review/deleteCoordinatorReview";

export default async function deleteCoordinatorReviewHandler(req, res) {
  const { id } = req.query;

  const coordinatorReview = await deleteCoordinatorReview(id);
  return res.status(200).json(coordinatorReview);
}
