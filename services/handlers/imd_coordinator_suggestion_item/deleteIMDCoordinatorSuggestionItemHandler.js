import userAbility from "@/services/abilities/defineAbility";
import deleteIMDCoordinatorSuggestionItem from "@/services/api/imd_coordinator_suggestion_item/deleteIMDCoordinatorSuggestionItem";
import readIMDCoordinatorSuggestionItem from "@/services/api/imd_coordinator_suggestion_item/readIMDCoordinatorSuggestionItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function deleteIMDCoordinatorSuggestionItemHandler(
  req,
  res
) {
  const { id } = req.query;

  const user = await getServerUser(req, res);
  const iMDCoordinatorSuggestionItem = await readIMDCoordinatorSuggestionItem({
    id,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const iMDCoordinatorSuggestionItem =
        await deleteIMDCoordinatorSuggestionItem(id);
      return res.status(200).json(iMDCoordinatorSuggestionItem);
    },
    action: "delete",
    subject: subject(
      "IMDCoordinatorSuggestionItem",
      iMDCoordinatorSuggestionItem
    ),
    fields: undefined,
    type: "IMDCoordinatorSuggestionItem",
  });
}
