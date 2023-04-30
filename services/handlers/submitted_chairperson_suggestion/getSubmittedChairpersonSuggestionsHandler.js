import userAbility from "@/services/abilities/defineAbility";
import readSubmittedChairpersonSuggestions from "@/services/api/submitted_chairperson_suggestion/readSubmittedChairpersonSuggestions";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getSubmittedChairpersonSuggestionsHandler(
  req,
  res
) {
  const { limit, page } = req.query;
  const user = await getServerUser(req, res);

  const submittedChairpersonSuggestions =
    await readSubmittedChairpersonSuggestions({
      limit: parseInt(limit),
      page: parseInt(page),
      ability: await userAbility(user),
    });
  return res.status(200).json(submittedChairpersonSuggestions);
}
