import userAbility from "@/services/abilities/defineAbility";
import deleteCoordinatorSuggestionItem from "@/services/api/coordinator_suggestion_item/deleteCoordinatorSuggestionItem";
import readCoordinatorSuggestionItem from "@/services/api/coordinator_suggestion_item/readCoordinatorSuggestionItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function deleteCoordinatorSuggestionItemHandler(req, res) {
  const { id } = req.query;

  const user = await getServerUser(req, res);
  const coordinatorSuggestionItem = await readCoordinatorSuggestionItem({
    id,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const coordinatorSuggestionItem = await deleteCoordinatorSuggestionItem(
        id
      );
      return res.status(200).json(coordinatorSuggestionItem);
    },
    action: "delete",
    subject: subject("CoordinatorSuggestionItem", coordinatorSuggestionItem),
    fields: undefined,
    type: "CoordinatorSuggestionItem",
  });
}
