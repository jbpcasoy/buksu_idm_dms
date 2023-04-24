import userAbility from "@/services/abilities/defineAbility";
import readCoordinatorSuggestion from "@/services/api/coordinator_suggestion/readCoordinatorSuggestion";
import createSubmittedCoordinatorSuggestion from "@/services/api/submitted_coordinator_suggestion/createSubmittedCoordinatorSuggestion";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postSubmittedCoordinatorSuggestionHandler(
  req,
  res
) {
  const { coordinatorSuggestionId } = req.body;

  const user = await getServerUser(req, res);
  const coordinatorSuggestion = await readCoordinatorSuggestion({
    id: coordinatorSuggestionId,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const submittedCoordinatorSuggestion =
        await createSubmittedCoordinatorSuggestion({
          coordinatorSuggestionId,
          ability: await userAbility(user),
        });

      return res.status(201).json(submittedCoordinatorSuggestion);
    },
    action: "connectToSubmittedCoordinatorSuggestion",
    subject: subject("CoordinatorSuggestion", coordinatorSuggestion),
    fields: undefined,
    type: "CoordinatorSuggestion",
  });
}
