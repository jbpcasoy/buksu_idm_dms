import readSubmittedPeerReviews from "@/services/api/submitted_peer_review/readSubmittedPeerReviews";

export default async function getSubmittedPeerReviewsHandler(req, res) {
  const { limit, page, peerReviewId } = req.query;

  const submittedPeerReviews = await readSubmittedPeerReviews({
    limit: limit ? parseInt(limit) : undefined,
    page: page ? parseInt(page) : undefined,
    peerReviewId,
  });
  return res.status(200).json(submittedPeerReviews);
}
