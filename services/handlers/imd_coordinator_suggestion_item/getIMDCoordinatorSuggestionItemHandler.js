import userAbility from "@/services/abilities/defineAbility";
import readIMDCoordinatorSuggestionItem from "@/services/api/imd_coordinator_suggestion_item/readIMDCoordinatorSuggestionItem";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getIMDCoordinatorSuggestionItemHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const iMDCoordinatorSuggestionItem = await readIMDCoordinatorSuggestionItem({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(iMDCoordinatorSuggestionItem);
}
