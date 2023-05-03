import userAbility from "@/services/abilities/defineAbility";
import readChairpersonSuggestionItems from "@/services/api/chairperson_suggestion_item/readChairpersonSuggestionItems";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getChairpersonSuggestionItemsHandler(req, res) {
  const { limit, page, chairpersonSuggestionId } = req.query;
  const user = await getServerUser(req, res);

  const chairpersonSuggestionItems = await readChairpersonSuggestionItems({
    limit: limit ? parseInt(limit) : undefined,
    page: page ? parseInt(page) : undefined,
    chairpersonSuggestionId,
    ability: await userAbility(user),
  });
  return res.status(200).json(chairpersonSuggestionItems);
}
