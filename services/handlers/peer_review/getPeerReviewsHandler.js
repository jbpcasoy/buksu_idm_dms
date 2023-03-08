import readPeerReviews from "@/services/api/peer_review/readPeerReviews";

export default async function getPeerReviewsHandler(req, res) {
  const { limit = 10, page = 1, facultyId, iMId } = req.query;

  const peerReviews = await readPeerReviews({
    limit: parseInt(limit),
    page: parseInt(page),
    facultyId,
    iMId,
  });
  return res.status(200).json(peerReviews);
}
