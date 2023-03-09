import readChairpersonReviews from "@/services/api/chairperson_review/readChairpersonReviews";

export default async function getChairpersonReviewsHandler(req, res) {
  const { limit = 10, page = 1, iMId, chairpersonId } = req.query;

  const chairpersonReviews = await readChairpersonReviews({
    limit: parseInt(limit),
    page: parseInt(page),
    iMId,
    chairpersonId,
  });
  return res.status(200).json(chairpersonReviews);
}
