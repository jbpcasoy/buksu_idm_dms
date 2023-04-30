import userAbility from "@/services/abilities/defineAbility";
import deleteCoordinatorReview from "@/services/api/coordinator_review/deleteCoordinatorReview";
import readCoordinatorReview from "@/services/api/coordinator_review/readCoordinatorReview";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteCoordinatorReviewHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  async function findSubject({ id }) {
    const subject = await readCoordinatorReview({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const coordinatorReview = await deleteCoordinatorReview(id);
      return res.status(200).json(coordinatorReview);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "CoordinatorReview",
  });
}
