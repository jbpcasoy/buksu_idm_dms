import readCoordinatorReview from "@/services/api/coordinator_review/readCoordinatorReview";

export default async function getCoordinatorReviewHandler(req, res) {
  const { id } = req.query;

  const coordinatorReview = await readCoordinatorReview(id);
  return res.status(200).json(coordinatorReview);
}
