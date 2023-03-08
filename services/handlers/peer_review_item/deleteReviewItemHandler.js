import deletePeerReviewItem from "@/services/api/peer_review_item/deletePeerReviewItem";

export default async function deleteReviewItemHandler(req, res) {
  const { id } = req.query;

  const peerReviewItem = await deletePeerReviewItem(id);
  return res.status(200).json(peerReviewItem);
}
