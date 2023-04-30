import userAbility from "@/services/abilities/defineAbility";
import readChairpersonReview from "@/services/api/chairperson_review/readChairpersonReview";
import createSubmittedChairpersonReview from "@/services/api/submitted_chairperson_review/createSubmittedChairpersonReview";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postSubmittedChairpersonReviewHandler(req, res) {
  const { chairpersonReviewId } = req.body;

  const user = await getServerUser(req, res);
  const chairpersonReview = await readChairpersonReview({
    id: chairpersonReviewId,
    ability: await userAbility(user),
  });
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const submittedChairpersonReview = await createSubmittedChairpersonReview(
        {
          chairpersonReviewId,
          ability: await userAbility(user),
        }
      );
      return res.status(201).json(submittedChairpersonReview);
    },
    action: "connectToSubmittedChairpersonReview",
    subject: subject("ChairpersonReview", chairpersonReview),
    fields: undefined,
    type: "ChairpersonReview",
  });
}
