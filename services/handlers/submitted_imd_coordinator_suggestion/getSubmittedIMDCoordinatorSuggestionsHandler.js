import userAbility from "@/services/abilities/defineAbility";
import readSubmittedIMDCoordinatorSuggestions from "@/services/api/submitted_imd_coordinator_suggestion/readSubmittedIMDCoordinatorSuggestions";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getSubmittedIMDCoordinatorSuggestionsHandler(
  req,
  res
) {
  const { limit, page } = req.query;
  const user = await getServerUser(req, res);

  const submittedIMDCoordinatorSuggestions =
    await readSubmittedIMDCoordinatorSuggestions({
      limit: parseInt(limit),
      page: parseInt(page),
      ability: await userAbility(user),
    });
  return res.status(200).json(submittedIMDCoordinatorSuggestions);
}
