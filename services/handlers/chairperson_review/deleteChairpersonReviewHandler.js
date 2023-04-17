import userAbility from "@/services/abilities/defineAbility";
import deleteChairpersonReview from "@/services/api/chairperson_review/deleteChairpersonReview";
import readChairpersonReview from "@/services/api/chairperson_review/readChairpersonReview";
import getServerUser from "@/services/helpers/getServerUser";
import statusError from "@/services/helpers/throwError";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteChairpersonReviewHandler(req, res) {
  const { id } = req.query;

  async function findSubject({ id }) {
    const user = await getServerUser(req, res);

    const subject = await readChairpersonReview({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const deletedChairpersonReview = await deleteChairpersonReview(id);
      return res.status(200).json(deletedChairpersonReview);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "ChairpersonReview",
  });
}
