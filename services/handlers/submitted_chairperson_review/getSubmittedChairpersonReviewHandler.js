import readSubmittedChairpersonReviews from "@/services/api/submitted_chairperson_review/readSubmittedChairpersonReviews";

export default async function getSubmittedChairpersonReviewHandler(req, res) {
  const { limit, page } = req.query;

  const submittedChairpersonReviews = await readSubmittedChairpersonReviews({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(submittedChairpersonReviews);
}
