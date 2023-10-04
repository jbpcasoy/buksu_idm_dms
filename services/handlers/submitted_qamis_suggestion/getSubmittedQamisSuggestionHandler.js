import userAbility from "@/services/abilities/defineAbility";
import readSubmittedQamisSuggestion from "@/services/api/submitted_qamis_suggestion/readSubmittedQamisSuggestion";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getSubmittedQamisSuggestionHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const submittedQamisSuggestion = await readSubmittedQamisSuggestion({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(submittedQamisSuggestion);
}
