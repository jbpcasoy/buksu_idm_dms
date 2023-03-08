import readPeerReviewItems from "@/services/api/peer_review_item/readPeerReviewItems";

export default async function getPeerReviewItemsHandler(req, res) {
  const { limit = 10, page = 1, questionId, peerReviewId } = req.query;

  const peerReviewItems = await readPeerReviewItems({
    limit: parseInt(limit),
    page: parseInt(page),
    questionId,
    peerReviewId,
  });
  return res.status(200).json(peerReviewItems);
}
