import userAbility from "@/services/abilities/defineAbility";
import readIMDCoordinatorSuggestion from "@/services/api/imd_coordinator_suggestion/readIMDCoordinatorSuggestion";
import createIMDCoordinatorSuggestionItem from "@/services/api/imd_coordinator_suggestion_item/createIMDCoordinatorSuggestionItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postIMDCoordinatorSuggestionItemHandler(
  req,
  res
) {
  const {
    iMDCoordinatorSuggestionId,
    value,
    pageNumber,
    actionTaken,
    remarks,
  } = req.body;
  const user = await getServerUser(req, res);
  const iMDCoordinatorSuggestion = await readIMDCoordinatorSuggestion({
    id: iMDCoordinatorSuggestionId,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const iMDCoordinatorSuggestionItem =
        await createIMDCoordinatorSuggestionItem({
          iMDCoordinatorSuggestionId,
          value,
          pageNumber,
          actionTaken,
          remarks,
        });
      return res.status(201).json(iMDCoordinatorSuggestionItem);
    },
    action: "connectToIMDCoordinatorSuggestionItem",
    subject: subject("IMDCoordinatorSuggestion", iMDCoordinatorSuggestion),
    fields: undefined,
    type: "IMDCoordinatorSuggestion",
  });
}
