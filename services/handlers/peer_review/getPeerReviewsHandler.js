import readPeerReviews from "@/services/api/peer_review/readPeerReviews";

export default async function getPeerReviewsHandler(req, res) {
  const { limit, page } = req.query;

  const peerReviews = await readPeerReviews({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(peerReviews);
}
