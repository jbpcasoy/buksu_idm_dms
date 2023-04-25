import userAbility from "@/services/abilities/defineAbility";
import createIMDCoordinatorEndorsement from "@/services/api/imd_coordinator_endorsement/createIMDCoordinatorEndorsement";
import readSubmittedIMDCoordinatorSuggestion from "@/services/api/submitted_imd_coordinator_suggestion/readSubmittedIMDCoordinatorSuggestion";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postIMDCoordinatorEndorsementHandler(req, res) {
  const { submittedIMDCoordinatorSuggestionId } = req.body;
  const user = await getServerUser(req, res);
  const submittedIMDCoordinatorSuggestion =
    await readSubmittedIMDCoordinatorSuggestion({
      id: submittedIMDCoordinatorSuggestionId,
      ability: await userAbility(user),
    });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const iMDCoordinatorEndorsement = await createIMDCoordinatorEndorsement({
        iMDCoordinatorId:
          user.IMDCoordinator.ActiveIMDCoordinator.iMDCoordinatorId,
        submittedIMDCoordinatorSuggestionId,
        ability: await userAbility(user),
      });
      return res.status(201).json(iMDCoordinatorEndorsement);
    },
    action: "connectToIMDCoordinatorEndorsement",
    subject: subject(
      "SubmittedIMDCoordinatorSuggestion",
      submittedIMDCoordinatorSuggestion
    ),
    fields: undefined,
    type: "SubmittedIMDCoordinatorSuggestion",
  });
}
