import userAbility from "@/services/abilities/defineAbility";
import readSubmittedPeerSuggestion from "@/services/api/submitted_peer_suggestion/readSubmittedPeerSuggestion";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getSubmittedPeerSuggestionHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const submittedPeerSuggestion = await readSubmittedPeerSuggestion({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(submittedPeerSuggestion);
}
