import userAbility from "@/services/abilities/defineAbility";
import readIMDCoordinatorSuggestion from "@/services/api/imd_coordinator_suggestion/readIMDCoordinatorSuggestion";
import createSubmittedIMDCoordinatorSuggestion from "@/services/api/submitted_imd_coordinator_suggestion/createSubmittedIMDCoordinatorSuggestion";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postSubmittedIMDCoordinatorSuggestionHandler(
  req,
  res
) {
  const { iMDCoordinatorSuggestionId } = req.body;

  const user = await getServerUser(req, res);
  const iMDCoordinatorSuggestion = await readIMDCoordinatorSuggestion({
    id: iMDCoordinatorSuggestionId,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const submittedIMDCoordinatorSuggestion =
        await createSubmittedIMDCoordinatorSuggestion({
          iMDCoordinatorSuggestionId,
          ability: await userAbility(user),
        });

      return res.status(201).json(submittedIMDCoordinatorSuggestion);
    },
    action: "connectToSubmittedIMDCoordinatorSuggestion",
    subject: subject("IMDCoordinatorSuggestion", iMDCoordinatorSuggestion),
    fields: undefined,
    type: "IMDCoordinatorSuggestion",
  });
}
