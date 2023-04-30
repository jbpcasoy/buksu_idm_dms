import userAbility from "@/services/abilities/defineAbility";
import readIMDCoordinatorSuggestions from "@/services/api/imd_coordinator_suggestion/readIMDCoordinatorSuggestions";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getIMDCoordinatorSuggestionsHandler(req, res) {
  const { limit, page, iMId } = req.query;
  const user = await getServerUser(req, res);

  const imdCoordinatorSuggestions = await readIMDCoordinatorSuggestions({
    limit: limit ? parseInt(limit) : undefined,
    page: page ? parseInt(page) : undefined,
    iMId,
    ability: await userAbility(user),
  });

  return res.status(200).json(imdCoordinatorSuggestions);
}
