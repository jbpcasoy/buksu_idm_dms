import userAbility from "@/services/abilities/defineAbility";
import readIM from "@/services/api/im/readIM";
import createIMDCoordinatorSuggestion from "@/services/api/imd_coordinator_suggestion/createIMDCoordinatorSuggestion";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postIMDCoordinatorSuggestionHandler(req, res) {
  const { iMId } = req.body;
  const user = await getServerUser(req, res);
  const iM = await readIM({ id: iMId, ability: await userAbility(user) });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const iMDCoordinatorSuggestion = await createIMDCoordinatorSuggestion({
        iMDCoordinatorId:
          user.IMDCoordinator.ActiveIMDCoordinator.iMDCoordinatorId,
        iMId,
      });

      return res.status(201).json(iMDCoordinatorSuggestion);
    },
    action: "connectToIMDCoordinatorSuggestion",
    subject: subject("IM", iM),
    fields: undefined,
    type: "IM",
  });
}
