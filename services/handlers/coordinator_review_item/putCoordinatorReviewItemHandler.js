import updateCoordinatorReviewItem from "@/services/api/coordinator_review_item/updateCoordinatorReviewItem";

export default async function putCoordinatorReviewItemHandler(req, res) {
  const { id } = req.query;
  const { answer } = req.body;

  const coordinatorReviewItem = await updateCoordinatorReviewItem(id, {
    answer,
  });
  return res.status(200).json(coordinatorReviewItem);
}
