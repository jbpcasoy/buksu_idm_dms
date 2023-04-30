import userAbility from "@/services/abilities/defineAbility";
import readIMDCoordinatorSuggestionItems from "@/services/api/imd_coordinator_suggestion_item/readIMDCoordinatorSuggestionItems";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getIMDCoordinatorSuggestionItemsHandler(
  req,
  res
) {
  const { limit, page, iMDCoordinatorSuggestionId } = req.query;
  const user = await getServerUser(req, res);

  const iMDCoordinatorSuggestionItems = await readIMDCoordinatorSuggestionItems(
    {
      limit: limit ? parseInt(limit) : undefined,
      page: page ? parseInt(page) : undefined,
      iMDCoordinatorSuggestionId,
      ability: await userAbility(user),
    }
  );
  return res.status(200).json(iMDCoordinatorSuggestionItems);
}
