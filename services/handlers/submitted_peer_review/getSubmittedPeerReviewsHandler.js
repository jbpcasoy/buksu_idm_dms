import userAbility from "@/services/abilities/defineAbility";
import readSubmittedPeerReviews from "@/services/api/submitted_peer_review/readSubmittedPeerReviews";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getSubmittedPeerReviewsHandler(req, res) {
  const { limit, page, peerReviewId } = req.query;
  const user = await getServerUser(req, res);

  const submittedPeerReviews = await readSubmittedPeerReviews({
    limit: limit ? parseInt(limit) : undefined,
    page: page ? parseInt(page) : undefined,
    peerReviewId,
    ability: await userAbility(user),
  });
  return res.status(200).json(submittedPeerReviews);
}
