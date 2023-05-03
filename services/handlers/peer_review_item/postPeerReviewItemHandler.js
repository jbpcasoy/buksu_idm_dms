import userAbility from "@/services/abilities/defineAbility";
import readPeerReview from "@/services/api/peer_review/readPeerReview";
import createPeerReviewItem from "@/services/api/peer_review_item/createPeerReviewItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postPeerReviewItemHandler(req, res) {
  const { questionId, answer, peerReviewId } = req.body;
  const user = await getServerUser(req, res);
  const peerReview = await readPeerReview({
    id: peerReviewId,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const peerReviewItem = await createPeerReviewItem({
        questionId,
        answer,
        peerReviewId,
      });
      return res.status(201).json(peerReviewItem);
    },
    action: "connectToPeerReviewItem",
    subject: subject("PeerReview", peerReview),
    fields: undefined,
    type: "PeerReview",
  });
}
