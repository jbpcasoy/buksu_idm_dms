import readPeerReviewItem from "@/services/api/peer_review_item/readPeerReviewItem";

export default async function getPeerReviewItemHandler(req, res) {
  const { id } = req.query;

  const peerReviewItem = await readPeerReviewItem(id);
  return res.status(200).json(peerReviewItem);
}
