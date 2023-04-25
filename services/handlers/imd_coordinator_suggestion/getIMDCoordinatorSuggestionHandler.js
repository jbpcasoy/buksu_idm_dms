import userAbility from "@/services/abilities/defineAbility";
import readIMDCoordinatorSuggestion from "@/services/api/imd_coordinator_suggestion/readIMDCoordinatorSuggestion";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getIMDCoordinatorSuggestionHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const iMDCoordinatorSuggestion = await readIMDCoordinatorSuggestion({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(iMDCoordinatorSuggestion);
}
