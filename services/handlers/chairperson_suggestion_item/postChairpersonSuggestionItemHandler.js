import userAbility from "@/services/abilities/defineAbility";
import readChairpersonSuggestion from "@/services/api/chairperson_suggestion/readChairpersonSuggestion";
import createChairpersonSuggestionItem from "@/services/api/chairperson_suggestion_item/createChairpersonSuggestionItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postChairpersonSuggestionItemHandler(req, res) {
  const { chairpersonSuggestionId, value, remarks, pageNumber } = req.body;

  const user = await getServerUser(req, res);
  const chairpersonSuggestion = await readChairpersonSuggestion({
    id: chairpersonSuggestionId,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const chairpersonSuggestionItem = await createChairpersonSuggestionItem({
        chairpersonSuggestionId,
        value,
        remarks,
        pageNumber,
      });
      return res.status(201).json(chairpersonSuggestionItem);
    },
    action: "connectToChairpersonSuggestionItem",
    subject: subject("ChairpersonSuggestion", chairpersonSuggestion),
    fields: undefined,
    type: "ChairpersonSuggestion",
  });
}
