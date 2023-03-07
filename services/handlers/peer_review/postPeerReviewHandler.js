import createPeerReview from "@/services/api/peer_review/createPeerReview";

export default async function postPeerReviewHandler(req, res) {
  const { facultyId, iMId } = req.body;
  //   TODO check that faculty is the current logged in users active faculty entity

  const peerReview = await createPeerReview({ facultyId, iMId });
  return res.status(201).json(peerReview);
}
