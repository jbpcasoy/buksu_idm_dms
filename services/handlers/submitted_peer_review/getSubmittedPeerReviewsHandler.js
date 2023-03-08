import readSubmittedPeerReviews from "@/services/api/submitted_peer_review/readSubmittedPeerReviews";

export default async function getSubmittedPeerReviewsHandler(req, res) {
  const { limit, page } = req.query;

  const submittedPeerReviews = await readSubmittedPeerReviews({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(submittedPeerReviews);
}
