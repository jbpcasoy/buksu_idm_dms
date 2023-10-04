import userAbility from "@/services/abilities/defineAbility";
import readSubmittedQamisSuggestions from "@/services/api/submitted_qamis_suggestion/readSubmittedQamisSuggestions";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getSubmittedQamisSuggestionsHandler(req, res) {
  const { limit, page } = req.query;
  const user = await getServerUser(req, res);

  const submittedQamisSuggestions = await readSubmittedQamisSuggestions({
    limit: parseInt(limit),
    page: parseInt(page),
    ability: await userAbility(user),
  });

  return res.status(200).json(submittedQamisSuggestions);
}
