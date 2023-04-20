import userAbility from "@/services/abilities/defineAbility";
import readCoordinatorReview from "@/services/api/coordinator_review/readCoordinatorReview";
import createCoordinatorReviewItem from "@/services/api/coordinator_review_item/createCoordinatorReviewItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postCoordinatorReviewItemHandler(req, res) {
  const { coordinatorReviewId, answer, questionId } = req.body;
  const user = await getServerUser(req, res);
  const coordinatorReview = await readCoordinatorReview({
    id: coordinatorReviewId,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const coordinatorReviewItem = await createCoordinatorReviewItem({
        coordinatorReviewId,
        answer,
        questionId,
      });
      return res.status(201).json(coordinatorReviewItem);
    },
    action: "connectToCoordinatorReviewItem",
    subject: subject("CoordinatorReview", coordinatorReview),
    fields: undefined,
    type: "CoordinatorReview",
  });
}
