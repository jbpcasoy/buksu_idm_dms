import userAbility from "@/services/abilities/defineAbility";
import createCoordinatorSuggestion from "@/services/api/coordinator_suggestion/createCoordinatorSuggestion";
import readSubmittedCoordinatorReview from "@/services/api/submitted_coordinator_review/readSubmittedCoordinatorReview";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postCoordinatorSuggestionHandler(req, res) {
  const { submittedCoordinatorReviewId } = req.body;

  const user = await getServerUser(req, res);
  const submittedCoordinatorReview = await readSubmittedCoordinatorReview({
    id: submittedCoordinatorReviewId,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const coordinatorSuggestion = await createCoordinatorSuggestion({
        submittedCoordinatorReviewId,
      });
      return res.status(200).json(coordinatorSuggestion);
    },
    action: "connectToCoordinatorSuggestion",
    subject: subject("SubmittedCoordinatorReview", submittedCoordinatorReview),
    fields: undefined,
    type: "SubmittedCoordinatorReview",
  });
}
