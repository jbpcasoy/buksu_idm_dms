import userAbility from "@/services/abilities/defineAbility";
import readChairpersonSuggestions from "@/services/api/chairperson_suggestion/readChairpersonSuggestions";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getChairpersonSuggestionsHandler(req, res) {
  const { limit = 10, page = 1, submittedChairpersonReviewId } = req.query;

  const user = await getServerUser(req, res);

  const chairpersonSuggestions = await readChairpersonSuggestions({
    limit: parseInt(limit),
    page: parseInt(page),
    submittedChairpersonReviewId,
    ability: await userAbility(user),
  });
  return res.status(200).json(chairpersonSuggestions);
}
