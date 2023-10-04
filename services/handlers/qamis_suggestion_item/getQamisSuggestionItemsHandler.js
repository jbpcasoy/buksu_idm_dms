import userAbility from "@/services/abilities/defineAbility";
import readQamisSuggestionItems from "@/services/api/qamis_suggestion_item/readQamisSuggestionItems";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getQamisSuggestionItemsHandler(req, res) {
  const { limit, page, qamisSuggestionId } = req.query;
  const user = await getServerUser(req, res);

  const qamisSuggestionItems = await readQamisSuggestionItems({
    limit: limit ? parseInt(limit) : undefined,
    page: page ? parseInt(page) : undefined,
    qamisSuggestionId,
    ability: await userAbility(user),
  });
  return res.status(200).json(qamisSuggestionItems);
}
