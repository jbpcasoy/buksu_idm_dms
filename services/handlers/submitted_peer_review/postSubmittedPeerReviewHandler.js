import userAbility from "@/services/abilities/defineAbility";
import readPeerReview from "@/services/api/peer_review/readPeerReview";
import createSubmittedPeerReview from "@/services/api/submitted_peer_review/createSubmittedPeerReview";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postSubmittedPeerReviewHandler(req, res) {
  const { peerReviewId } = req.body;

  const user = await getServerUser(req, res);
  const peerReview = await readPeerReview({
    id: peerReviewId,
    ability: await userAbility(user),
  });
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const submittedPeerReview = await createSubmittedPeerReview({
        peerReviewId,
        ability: await userAbility(user),
      });
      return res.status(201).json(submittedPeerReview);
    },
    action: "connectToSubmittedPeerReview",
    subject: subject("PeerReview", peerReview),
    fields: undefined,
    type: "PeerReview",
  });
}
