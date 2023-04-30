import userAbility from "@/services/abilities/defineAbility";
import deleteIMDCoordinatorSuggestion from "@/services/api/imd_coordinator_suggestion/deleteIMDCoordinatorSuggestion";
import readIMDCoordinatorSuggestion from "@/services/api/imd_coordinator_suggestion/readIMDCoordinatorSuggestion";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteIMDCoordinatorSuggestionHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  async function findSubject({ id }) {
    const subject = await readIMDCoordinatorSuggestion({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const iMDCoordinatorSuggestion = await deleteIMDCoordinatorSuggestion(id);
      return res.status(200).json(iMDCoordinatorSuggestion);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "IMDCoordinatorSuggestion",
  });
}
