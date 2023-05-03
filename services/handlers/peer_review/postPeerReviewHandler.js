import userAbility from "@/services/abilities/defineAbility";
import readIM from "@/services/api/im/readIM";
import createPeerReview from "@/services/api/peer_review/createPeerReview";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postPeerReviewHandler(req, res) {
  const { iMId } = req.body;

  const user = await getServerUser(req, res);
  const iM = await readIM({ id: iMId, ability: await userAbility(user) });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const peerReview = await createPeerReview({
        facultyId: user.ActiveFaculty.facultyId,
        iMId,
      });
      return res.status(201).json(peerReview);
    },
    action: "connectToPeerReview",
    subject: subject("IM", iM),
    fields: undefined,
    type: "IM",
  });
}
