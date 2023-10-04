import userAbility from "@/services/abilities/defineAbility";
import readIM from "@/services/api/im/readIM";
import createQamisSuggestion from "@/services/api/qamis_suggestion/createQamisSuggestion";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postQamisSuggestionHandler(req, res) {
  const { iMId } = req.body;

  const user = await getServerUser(req, res);
  const ability = await userAbility(user)
  const iM = await readIM({ id: iMId, ability });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const qamisSuggestion = await createQamisSuggestion({
        iMId: iM.id,
      });
      return res.status(201).json(qamisSuggestion);
    },
    action: "connectToQamisSuggestion",
    subject: subject("IM", iM),
    fields: undefined,
    type: "IM",
  });
}
