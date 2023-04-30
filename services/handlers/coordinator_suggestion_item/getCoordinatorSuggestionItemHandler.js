import userAbility from "@/services/abilities/defineAbility";
import readCoordinatorSuggestionItem from "@/services/api/coordinator_suggestion_item/readCoordinatorSuggestionItem";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getCoordinatorSuggestionItemHandler(req, res) {
  const { id } = req.query;

  const user = await getServerUser(req, res);

  const coordinatorSuggestionItem = await readCoordinatorSuggestionItem({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(coordinatorSuggestionItem);
}
