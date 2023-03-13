import readCoordinatorReviewItems from "@/services/api/coordinator_review_item/readCoordinatorReviewItems";

export default async function getCoordinatorReviewItemsHandler(req, res) {
  const { limit, page, questionId, coordinatorReviewId } = req.query;

  const coordinatorReviewItems = await readCoordinatorReviewItems({
    limit: limit ? parseInt(limit) : undefined,
    page: page ? parseInt(page) : undefined,
    questionId,
    coordinatorReviewId,
  });

  return res.status(200).json(coordinatorReviewItems);
}
