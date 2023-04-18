import userAbility from "@/services/abilities/defineAbility";
import deleteChairpersonSuggestion from "@/services/api/chairperson_suggestion/deleteChairpersonSuggestion";
import readChairpersonSuggestion from "@/services/api/chairperson_suggestion/readChairpersonSuggestion";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteChairpersonSuggestionHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  async function findSubject({ id }) {
    const subject = await readChairpersonSuggestion({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const chairpersonSuggestion = await deleteChairpersonSuggestion(id);
      return res.status(200).json(chairpersonSuggestion);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "ChairpersonSuggestion",
  });
}
