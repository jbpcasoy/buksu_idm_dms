import userAbility from "@/services/abilities/defineAbility";
import readQamisSuggestions from "@/services/api/qamis_suggestion/readQamisSuggestions";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getQamisSuggestionsHandler(req, res) {
  const { limit, page } = req.query;

  const user = await getServerUser(req, res);

  const qamisSuggestions = await readQamisSuggestions({ // TODO implement
    limit: limit ? parseInt(limit) : undefined,
    page: page ? parseInt(page) : undefined,
    ability: await userAbility(user),
  });
  return res.status(200).json(qamisSuggestions);
}
