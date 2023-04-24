import userAbility from "@/services/abilities/defineAbility";
import readSubmittedPeerSuggestions from "@/services/api/submitted_peer_suggestion/readSubmittedPeerSuggestions";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getSubmittedPeerSuggestionsHandler(req, res) {
  const { limit, page } = req.query;
  const user = await getServerUser(req, res);

  const submittedPeerSuggestions = await readSubmittedPeerSuggestions({
    limit: parseInt(limit),
    page: parseInt(page),
    ability: await userAbility(user),
  });

  return res.status(200).json(submittedPeerSuggestions);
}
