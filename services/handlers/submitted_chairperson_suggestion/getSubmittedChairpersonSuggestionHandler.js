import userAbility from "@/services/abilities/defineAbility";
import readSubmittedChairpersonSuggestion from "@/services/api/submitted_chairperson_suggestion/readSubmittedChairpersonSuggestion";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getSubmittedChairpersonSuggestionHandler(
  req,
  res
) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const submittedChairpersonSuggestion =
    await readSubmittedChairpersonSuggestion({
      id,
      ability: await userAbility(user),
    });
  return res.status(200).json(submittedChairpersonSuggestion);
}
