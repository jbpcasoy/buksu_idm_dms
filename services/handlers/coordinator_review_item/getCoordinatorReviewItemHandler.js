import readCoordinatorReviewItem from "@/services/api/coordinator_review_item/readCoordinatorReviewItem";

export default async function getCoordinatorReviewItemHandler(req, res) {
  const { id } = req.query;

  const coordinatorReviewItem = await readCoordinatorReviewItem(id);
  return res.status(200).json(coordinatorReviewItem);
}
