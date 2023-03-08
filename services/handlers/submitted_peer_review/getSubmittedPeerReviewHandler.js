import readSubmittedPeerReview from "@/services/api/submitted_peer_review/readSubmittedPeerReview";

export default async function getSubmittedPeerReviewHandler(req, res) {
  const { id } = req.query;

  const submittedPeerReview = await readSubmittedPeerReview(id);
  return res.status(200).json(submittedPeerReview);
}
