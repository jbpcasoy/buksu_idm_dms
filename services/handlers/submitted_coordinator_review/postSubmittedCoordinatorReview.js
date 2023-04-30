import userAbility from "@/services/abilities/defineAbility";
import readCoordinatorReview from "@/services/api/coordinator_review/readCoordinatorReview";
import createSubmittedCoordinatorReview from "@/services/api/submitted_coordinator_review/createSubmittedCoordinatorReview";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postSubmittedCoordinatorReview(req, res) {
  const { coordinatorReviewId } = req.body;
  const user = await getServerUser(req, res);
  const ability = await userAbility(user);
  const coordinatorReview = await readCoordinatorReview({
    id: coordinatorReviewId,
    ability,
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const submittedCoordinatorReview = await createSubmittedCoordinatorReview(
        {
          coordinatorReviewId,
          ability,
        }
      );
      return res.status(201).json(submittedCoordinatorReview);
    },
    action: "connectToSubmittedCoordinatorReview",
    subject: subject("CoordinatorReview", coordinatorReview),
    fields: undefined,
    type: "CoordinatorReview",
  });
}
