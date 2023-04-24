import userAbility from "@/services/abilities/defineAbility";
import readCoordinatorSuggestion from "@/services/api/coordinator_suggestion/readCoordinatorSuggestion";
import createCoordinatorSuggestionItem from "@/services/api/coordinator_suggestion_item/createCoordinatorSuggestionItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postCoordinatorSuggestionItemHandler(req, res) {
  const { coordinatorSuggestionId, value, remarks, pageNumber } = req.body;

  const user = await getServerUser(req, res);
  const coordinatorSuggestion = await readCoordinatorSuggestion({
    id: coordinatorSuggestionId,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const coordinatorSuggestionItem = await createCoordinatorSuggestionItem({
        coordinatorSuggestionId,
        value,
        remarks,
        pageNumber,
      });

      return res.status(201).json(coordinatorSuggestionItem);
    },
    action: "connectToCoordinatorSuggestionItem",
    subject: subject("CoordinatorSuggestion", coordinatorSuggestion),
    fields: undefined,
    type: "CoordinatorSuggestion",
  });
}
