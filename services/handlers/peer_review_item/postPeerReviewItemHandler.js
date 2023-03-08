import createPeerReviewItem from "@/services/api/peer_review_item/createPeerReviewItem";

export default async function postPeerReviewItemHandler(req, res) {
  const { questionId, answer, peerReviewId } = req.body;

  const peerReviewItem = await createPeerReviewItem({
    questionId,
    answer,
    peerReviewId,
  });
  return res.status(201).json(peerReviewItem);
}
