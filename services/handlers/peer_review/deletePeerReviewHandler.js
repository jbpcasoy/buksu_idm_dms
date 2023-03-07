import deletePeerReview from "@/services/api/peer_review/deletePeerReview";

export default async function deletePeerReviewHandler(req, res) {
  const { id } = req.query;

  const peerReview = await deletePeerReview(id);
  return res.status(200).json(peerReview);
}
