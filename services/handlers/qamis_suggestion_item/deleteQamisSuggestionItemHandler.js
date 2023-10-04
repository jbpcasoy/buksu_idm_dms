import userAbility from "@/services/abilities/defineAbility";
import deleteQamisSuggestionItem from "@/services/api/qamis_suggestion_item/deleteQamisSuggestionItem";
import readQamisSuggestionItem from "@/services/api/qamis_suggestion_item/readQamisSuggestionItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function deleteQamisSuggestionItemHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);
  const qamisSuggestionItem = await readQamisSuggestionItem({
    id,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const qamisSuggestionItem = await deleteQamisSuggestionItem(id);
      return res.status(200).json(qamisSuggestionItem);
    },
    action: "delete",
    subject: subject("QamisSuggestionItem", qamisSuggestionItem),
    fields: undefined,
    type: "QamisSuggestionItem",
  });
}
