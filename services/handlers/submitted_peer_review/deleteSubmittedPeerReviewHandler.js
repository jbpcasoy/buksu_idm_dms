import userAbility from "@/services/abilities/defineAbility";
import deleteSubmittedPeerReview from "@/services/api/submitted_peer_review/deleteSubmittedPeerReview";
import readSubmittedPeerReview from "@/services/api/submitted_peer_review/readSubmittedPeerReview";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteSubmittedPeerReviewHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  async function findSubject({ id }) {
    const subject = await readSubmittedPeerReview({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const submittedPeerReview = await deleteSubmittedPeerReview(id);
      return res.status(200).json(submittedPeerReview);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "SubmittedPeerReview",
  });
}
