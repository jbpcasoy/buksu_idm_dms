import userAbility from "@/services/abilities/defineAbility";
import deleteCoordinatorSuggestion from "@/services/api/coordinator_suggestion/deleteCoordinatorSuggestion";
import readCoordinatorSuggestion from "@/services/api/coordinator_suggestion/readCoordinatorSuggestion";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteCoordinatorSuggestionHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  async function findSubject({ id }) {
    const subject = await readCoordinatorSuggestion({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const coordinatorSuggestion = await deleteCoordinatorSuggestion(id);
      return res.status(200).json(coordinatorSuggestion);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "CoordinatorSuggestion",
  });
}
