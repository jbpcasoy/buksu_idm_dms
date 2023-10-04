import userAbility from "@/services/abilities/defineAbility";
import deleteQamisSuggestion from "@/services/api/qamis_suggestion/deleteQamisSuggestion";
import readQamisSuggestion from "@/services/api/qamis_suggestion/readQamisSuggestion";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteQamisSuggestionHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  async function findSubject({ id }) {
    const subject = await readQamisSuggestion({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const qamisSuggestion = await deleteQamisSuggestion(id);

      return res.status(200).json(qamisSuggestion);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "QamisSuggestion",
  });
}
