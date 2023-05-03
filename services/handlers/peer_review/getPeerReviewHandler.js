import userAbility from "@/services/abilities/defineAbility";
import readPeerReview from "@/services/api/peer_review/readPeerReview";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getPeerReviewHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const peerReview = await readPeerReview({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(peerReview);
}
