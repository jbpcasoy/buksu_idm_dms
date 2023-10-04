import userAbility from "@/services/abilities/defineAbility";
import readQamisSuggestionItem from "@/services/api/qamis_suggestion_item/readQamisSuggestionItem";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getQamisSuggestionItemHandler(req, res) {
  const { id } = req.query;

  const user = await getServerUser(req, res);

  const qamisSuggestionItem = await readQamisSuggestionItem({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(qamisSuggestionItem);
}
