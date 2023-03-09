import deleteCoordinatorReviewItem from "@/services/api/coordinator_review_item/deleteCoordinatorReviewItem";

export default async function deleteCoordinatorReviewItemHandler(req, res) {
  const { id } = req.query;

  const coordinatorReviewItem = await deleteCoordinatorReviewItem(id);
  return res.status(200).json(coordinatorReviewItem);
}
