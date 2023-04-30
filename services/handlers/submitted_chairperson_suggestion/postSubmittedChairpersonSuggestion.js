import userAbility from "@/services/abilities/defineAbility";
import readChairpersonSuggestion from "@/services/api/chairperson_suggestion/readChairpersonSuggestion";
import createSubmittedChairpersonSuggestion from "@/services/api/submitted_chairperson_suggestion/createSubmittedChairpersonSuggestion";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postSubmittedChairpersonSuggestion(req, res) {
  const { chairpersonSuggestionId } = req.body;

  const user = await getServerUser(req, res);
  const chairpersonSuggestion = await readChairpersonSuggestion({
    id: chairpersonSuggestionId,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const submittedChairpersonSuggestion =
        await createSubmittedChairpersonSuggestion({
          chairpersonSuggestionId,
          ability: await userAbility(user),
        });
      return res.status(201).json(submittedChairpersonSuggestion);
    },
    action: "connectToSubmittedChairpersonSuggestion",
    subject: subject("ChairpersonSuggestion", chairpersonSuggestion),
    fields: undefined,
    type: "ChairpersonSuggestion",
  });
}
