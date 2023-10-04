import userAbility from "@/services/abilities/defineAbility";
import deleteSubmittedQamisSuggestion from "@/services/api/submitted_qamis_suggestion/deleteSubmittedQamisSuggestion";
import readSubmittedQamisSuggestion from "@/services/api/submitted_qamis_suggestion/readSubmittedQamisSuggestion";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteSubmittedQamisSuggestionHandler(req, res) {
  const { id } = req.query;

  const user = await getServerUser(req, res);

  async function findSubject({ id }) {
    const subject = await readSubmittedQamisSuggestion({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const submittedQamisSuggestion = await deleteSubmittedQamisSuggestion(id);
      return res.status(200).json(submittedQamisSuggestion);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "SubmittedQamisSuggestion",
  });
}
