import userAbility from "@/services/abilities/defineAbility";
import readChairpersonReview from "@/services/api/chairperson_review/readChairpersonReview";
import createChairpersonReviewItem from "@/services/api/chairperson_review_item/createChairpersonReviewItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postChairpersonReviewItemHandler(req, res) {
  const { questionId, answer, chairpersonReviewId } = req.body;
  const user = await getServerUser(req, res);
  const chairpersonReview = await readChairpersonReview({
    id: chairpersonReviewId,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const chairpersonReviewItem = await createChairpersonReviewItem({
        questionId,
        answer,
        chairpersonReviewId,
      });
      return res.status(201).json(chairpersonReviewItem);
    },
    action: "connectToChairpersonReviewItem",
    subject: subject("ChairpersonReview", chairpersonReview),
    fields: undefined,
    type: "ChairpersonReview",
  });
}

// TODO test post request
