import createSubmittedPeerReview from "@/services/api/submitted_peer_review/createSubmittedPeerReview";

export default async function postSubmittedPeerReviewHandler(req, res) {
  const { peerReviewId } = req.body;

  const submittedPeerReview = await createSubmittedPeerReview({
    peerReviewId,
  });
  return res.status(201).json(submittedPeerReview);
}
