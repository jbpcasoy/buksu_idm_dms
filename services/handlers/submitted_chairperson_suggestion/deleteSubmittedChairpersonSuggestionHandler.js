import userAbility from "@/services/abilities/defineAbility";
import deleteSubmittedChairpersonSuggestion from "@/services/api/submitted_chairperson_suggestion/deleteSubmittedChairpersonSuggestion";
import readSubmittedChairpersonSuggestion from "@/services/api/submitted_chairperson_suggestion/readSubmittedChairpersonSuggestion";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteSubmittedChairpersonSuggestionHandler(
  req,
  res
) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  async function findSubject({ id }) {
    const subject = await readSubmittedChairpersonSuggestion({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const submittedChairpersonSuggestion =
        await deleteSubmittedChairpersonSuggestion(id);
      return res.status(200).json(submittedChairpersonSuggestion);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "SubmittedChairpersonSuggestion",
  });
}
