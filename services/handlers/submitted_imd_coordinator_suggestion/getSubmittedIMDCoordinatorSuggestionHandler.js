import userAbility from "@/services/abilities/defineAbility";
import readSubmittedIMDCoordinatorSuggestion from "@/services/api/submitted_imd_coordinator_suggestion/readSubmittedIMDCoordinatorSuggestion";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getSubmittedIMDCoordinatorSuggestionHandler(
  req,
  res
) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const submittedIMDCoordinatorSuggestion =
    await readSubmittedIMDCoordinatorSuggestion({
      id,
      ability: await userAbility(user),
    });
  return res.status(200).json(submittedIMDCoordinatorSuggestion);
}
