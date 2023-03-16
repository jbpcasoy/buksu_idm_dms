import readSubmittedChairpersonReviews from "@/services/api/submitted_chairperson_review/readSubmittedChairpersonReviews";

export default async function getSubmittedChairpersonReviewsHandler(req, res) {
  const { limit = 10, page = 1, chairpersonReviewId } = req.query;

  const submittedChairpersonReviews = await readSubmittedChairpersonReviews({
    limit: parseInt(limit),
    page: parseInt(page),
    chairpersonReviewId,
  });
  return res.status(200).json(submittedChairpersonReviews);
}
