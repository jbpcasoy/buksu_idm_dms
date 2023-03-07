import updatePeerReview from "@/services/api/peer_review/updatePeerReview";

export default async function putPeerReviewHandler(req, res) {
  const { id } = req.query;
  const { submitted } = req.body;

  const peerReview = await updatePeerReview(id, { submitted });
  return res.status(200).json(peerReview);
}
