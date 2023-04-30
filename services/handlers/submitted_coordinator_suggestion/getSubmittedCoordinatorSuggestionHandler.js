import userAbility from "@/services/abilities/defineAbility";
import readSubmittedCoordinatorSuggestion from "@/services/api/submitted_coordinator_suggestion/readSubmittedCoordinatorSuggestion";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getSubmittedCoordinatorSuggestionHandler(
  req,
  res
) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const submittedCoordinatorSuggestion =
    await readSubmittedCoordinatorSuggestion({
      id,
      ability: await userAbility(user),
    });
  return res.status(200).json(submittedCoordinatorSuggestion);
}
