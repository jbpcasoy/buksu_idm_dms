import userAbility from "@/services/abilities/defineAbility";
import deletePeerReview from "@/services/api/peer_review/deletePeerReview";
import readPeerReview from "@/services/api/peer_review/readPeerReview";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deletePeerReviewHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  async function findSubject({ id }) {
    const subject = await readPeerReview({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const peerReview = await deletePeerReview(id);
      return res.status(200).json(peerReview);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "PeerReview",
  });
}
