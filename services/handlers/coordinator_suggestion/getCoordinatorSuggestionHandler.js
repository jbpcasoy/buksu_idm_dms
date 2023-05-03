import userAbility from "@/services/abilities/defineAbility";
import readCoordinatorSuggestion from "@/services/api/coordinator_suggestion/readCoordinatorSuggestion";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getCoordinatorSuggestionHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const coordinatorSuggestions = await readCoordinatorSuggestion({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(coordinatorSuggestions);
}
