import userAbility from "@/services/abilities/defineAbility";
import readCoordinatorSuggestions from "@/services/api/coordinator_suggestion/readCoordinatorSuggestions";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getCoordinatorSuggestionsHandler(req, res) {
  const { limit = 10, page = 1, submittedCoordinatorReviewId } = req.query;

  const user = await getServerUser(req, res);

  const coordinatorSuggestion = await readCoordinatorSuggestions({
    limit: parseInt(limit),
    page: parseInt(page),
    submittedCoordinatorReviewId,
    ability: await userAbility(user),
  });
  return res.status(200).json(coordinatorSuggestion);
}
