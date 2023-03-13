import readPeerReviewItems from "@/services/api/peer_review_item/readPeerReviewItems";

export default async function getPeerReviewItemsHandler(req, res) {
  const { limit, page, questionId, peerReviewId } = req.query;

  const peerReviewItems = await readPeerReviewItems({
    limit: limit ? parseInt(limit) : undefined,
    page: limit ? parseInt(page) : undefined,
    questionId,
    peerReviewId,
  });
  return res.status(200).json(peerReviewItems);
}
