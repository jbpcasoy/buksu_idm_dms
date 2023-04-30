import userAbility from "@/services/abilities/defineAbility";
import deleteSubmittedCoordinatorSuggestion from "@/services/api/submitted_coordinator_suggestion/deleteSubmittedCoordinatorSuggestion";
import readSubmittedCoordinatorSuggestion from "@/services/api/submitted_coordinator_suggestion/readSubmittedCoordinatorSuggestion";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteSubmittedCoordinatorSuggestionHandler(
  req,
  res
) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  async function findSubject({ id }) {
    const subject = await readSubmittedCoordinatorSuggestion({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const { id } = req.query;

      const submittedCoordinatorSuggestion =
        await deleteSubmittedCoordinatorSuggestion(id);
      return res.status(200).json(submittedCoordinatorSuggestion);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "SubmittedCoordinatorSuggestion",
  });
}
