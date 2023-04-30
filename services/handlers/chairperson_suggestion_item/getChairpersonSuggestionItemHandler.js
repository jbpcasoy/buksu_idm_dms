import userAbility from "@/services/abilities/defineAbility";
import readChairpersonSuggestionItem from "@/services/api/chairperson_suggestion_item/readChairpersonSuggestionItem";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getChairpersonSuggestionItemHandler(req, res) {
  const { id } = req.query;

  const user = await getServerUser(req, res);

  const chairpersonSuggestionItem = await readChairpersonSuggestionItem({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(chairpersonSuggestionItem);
}

// TODO continue: add user read ability on casl
