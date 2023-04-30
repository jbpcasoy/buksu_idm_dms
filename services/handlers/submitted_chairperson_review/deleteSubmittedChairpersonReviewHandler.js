import userAbility from "@/services/abilities/defineAbility";
import deleteSubmittedChairpersonReview from "@/services/api/submitted_chairperson_review/deleteSubmittedChairpersonReview";
import readSubmittedChairpersonReview from "@/services/api/submitted_chairperson_review/readSubmittedChairpersonReview";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteSubmittedChairpersonReviewHandler(
  req,
  res
) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  async function findSubject({ id }) {
    const subject = await readSubmittedChairpersonReview({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const submittedChairpersonReview = await deleteSubmittedChairpersonReview(
        id
      );
      return res.status(200).json(submittedChairpersonReview);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "SubmittedChairpersonReview",
  });
}
