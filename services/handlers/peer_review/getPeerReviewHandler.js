import readPeerReview from "@/services/api/peer_review/readPeerReview";

export default async function getPeerReviewHandler(req, res) {
  const { id } = req.query;
  //   console.log({ query: req.query, id });

  const peerReview = await readPeerReview(id);
  return res.status(200).json(peerReview);
}
