import userAbility from "@/services/abilities/defineAbility";
import readPeerReviewItem from "@/services/api/peer_review_item/readPeerReviewItem";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getPeerReviewItemHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const peerReviewItem = await readPeerReviewItem({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(peerReviewItem);
}
