import userAbility from "@/services/abilities/defineAbility";
import readChairpersonSuggestion from "@/services/api/chairperson_suggestion/readChairpersonSuggestion";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getChairpersonSuggestionHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const chairpersonSuggestion = await readChairpersonSuggestion({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(chairpersonSuggestion);
}
