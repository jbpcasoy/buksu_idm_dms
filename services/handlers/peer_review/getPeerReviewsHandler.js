import userAbility from "@/services/abilities/defineAbility";
import readPeerReviews from "@/services/api/peer_review/readPeerReviews";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getPeerReviewsHandler(req, res) {
  const { limit = 10, page = 1, facultyId, iMId } = req.query;
  const user = await getServerUser(req, res);

  const peerReviews = await readPeerReviews({
    limit: parseInt(limit),
    page: parseInt(page),
    facultyId,
    iMId,
    ability: await userAbility(user),
  });
  return res.status(200).json(peerReviews);
}
