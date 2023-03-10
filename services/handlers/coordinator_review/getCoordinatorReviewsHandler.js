import readCoordinatorReviews from "@/services/api/coordinator_review/readCoordinatorReviews";

export default async function getCoordinatorReviewsHandler(req, res) {
  const { limit = 10, page = 1, iMId, coordinatorId } = req.query;

  const coordinatorReviews = await readCoordinatorReviews({
    limit: parseInt(limit),
    page: parseInt(page),
    iMId,
    coordinatorId,
  });
  return res.status(200).json(coordinatorReviews);
}
