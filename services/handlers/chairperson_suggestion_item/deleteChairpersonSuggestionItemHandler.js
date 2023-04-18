import userAbility from "@/services/abilities/defineAbility";
import deleteChairpersonSuggestionItem from "@/services/api/chairperson_suggestion_item/deleteChairpersonSuggestionItem";
import readChairpersonSuggestionItem from "@/services/api/chairperson_suggestion_item/readChairpersonSuggestionItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function deleteChairpersonSuggestionItemHandler(req, res) {
  const { id } = req.query;

  const user = await getServerUser(req, res);
  const chairpersonSuggestionItem = await readChairpersonSuggestionItem({
    id,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const deletedChairpersonSuggestionItem =
        await deleteChairpersonSuggestionItem(id);
      return res.status(200).json(deletedChairpersonSuggestionItem);
    },
    action: "delete",
    subject: subject("ChairpersonSuggestionItem", chairpersonSuggestionItem),
    fields: undefined,
    type: "ChairpersonSuggestionItem",
  });
}
