import readCoordinatorReviewItems from "@/services/api/coordinator_review_item/readCoordinatorReviewItems";

export default async function getCoordinatorReviewItemsHandler(req, res) {
  const { limit = 10, page = 1, questionId, coordinatorReviewId } = req.query;

  const coordinatorReviewItems = await readCoordinatorReviewItems({
    limit: parseInt(limit),
    page: parseInt(page),
    questionId,
    coordinatorReviewId,
  });

  return res.status(200).json(coordinatorReviewItems);
}
