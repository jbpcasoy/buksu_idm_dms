import userAbility from "@/services/abilities/defineAbility";
import readQamisSuggestion from "@/services/api/qamis_suggestion/readQamisSuggestion";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getQamisSuggestionHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const qamisSuggestion = await readQamisSuggestion({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(qamisSuggestion);
}
