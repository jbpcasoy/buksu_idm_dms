import readPeerReviewItems from "@/services/api/peer_review_item/readPeerReviewItems";

export default async function getPeerReviewItemsHandler(req, res) {
  const { limit, page } = req.query;

  const peerReviewItems = await readPeerReviewItems({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(peerReviewItems);
}
