import userAbility from "@/services/abilities/defineAbility";
import deleteSubmittedIMDCoordinatorSuggestion from "@/services/api/submitted_imd_coordinator_suggestion/deleteSubmittedIMDCoordinatorSuggestion";
import readSubmittedIMDCoordinatorSuggestion from "@/services/api/submitted_imd_coordinator_suggestion/readSubmittedIMDCoordinatorSuggestion";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteIMDSubmittedCoordinatorSuggestionHandler(
  req,
  res
) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  async function findSubject({ id }) {
    const subject = await readSubmittedIMDCoordinatorSuggestion({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const submittedIMDCoordinatorSuggestion =
        await deleteSubmittedIMDCoordinatorSuggestion(id);
      return res.status(200).json(submittedIMDCoordinatorSuggestion);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "SubmittedIMDCoordinatorSuggestion",
  });
}
