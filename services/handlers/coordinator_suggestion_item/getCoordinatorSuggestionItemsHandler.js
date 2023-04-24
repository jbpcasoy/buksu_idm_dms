import userAbility from "@/services/abilities/defineAbility";
import readCoordinatorSuggestionItems from "@/services/api/coordinator_suggestion_item/readCoordinatorSuggestionItems";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getCoordinatorSuggestionItemsHandler(req, res) {
  const { limit, page, coordinatorSuggestionId } = req.query;
  const user = await getServerUser(req, res);

  const coordinatorSuggestionItems = await readCoordinatorSuggestionItems({
    limit: limit ? parseInt(limit) : undefined,
    page: page ? parseInt(page) : undefined,
    coordinatorSuggestionId,
    ability: await userAbility(user),
  });
  return res.status(200).json(coordinatorSuggestionItems);
}
