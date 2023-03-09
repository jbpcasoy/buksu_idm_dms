import readCoordinatorPreviews from "@/services/api/coordinator_review/readCoordinatorPreviews";

export default async function getCoordinatorReviewsHandler(req, res) {
  const { limit = 10, page = 1 } = req.query;

  const coordinatorPreviews = await readCoordinatorPreviews({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(coordinatorPreviews);
}
