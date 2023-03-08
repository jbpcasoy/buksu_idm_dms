import deleteSubmittedPeerReview from "@/services/api/submitted_peer_review/deleteSubmittedPeerReview";

export default async function deleteSubmittedPeerReviewHandler(req, res) {
  const { id } = req.query;

  const submittedPeerReview = await deleteSubmittedPeerReview(id);
  return res.status(200).json(submittedPeerReview);
}
