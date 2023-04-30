import userAbility from "@/services/abilities/defineAbility";
import deleteSubmittedCoordinatorReview from "@/services/api/submitted_coordinator_review/deleteSubmittedCoordinatorReview";
import readSubmittedCoordinatorReview from "@/services/api/submitted_coordinator_review/readSubmittedCoordinatorReview";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteSubmittedCoordinatorHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  async function findSubject({ id }) {
    const subject = await readSubmittedCoordinatorReview({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const submittedCoordinatorReview = await deleteSubmittedCoordinatorReview(
        id
      );
      return res.status(200).json(submittedCoordinatorReview);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "SubmittedCoordinatorReview",
  });
}
