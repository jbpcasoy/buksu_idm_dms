import updatePeerReviewItem from "@/services/api/peer_review_item/updatePeerReviewItem";

export default async function putReviewItemHandler(req, res) {
  const { answer } = req.body;
  const { id } = req.query;

  const peerReviewItem = await updatePeerReviewItem(id, { answer });
  return res.status(200).json(peerReviewItem);
}
