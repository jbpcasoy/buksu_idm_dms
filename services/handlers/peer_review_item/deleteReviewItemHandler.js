import userAbility from "@/services/abilities/defineAbility";
import deletePeerReviewItem from "@/services/api/peer_review_item/deletePeerReviewItem";
import readPeerReviewItem from "@/services/api/peer_review_item/readPeerReviewItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function deleteReviewItemHandler(req, res) {
  const { id } = req.query;

  const user = await getServerUser(req, res);
  const peerReviewItem = await readPeerReviewItem({
    id,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const peerReviewItem = await deletePeerReviewItem(id);
      return res.status(200).json(peerReviewItem);
    },
    action: "delete",
    subject: subject("PeerReviewItem", peerReviewItem),
    fields: undefined,
    type: "PeerReviewItem",
  });
}
