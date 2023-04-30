import userAbility from "@/services/abilities/defineAbility";
import readPeerSuggestions from "@/services/api/peer_suggestion/readPeerSuggestions";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getPeerSuggestionsHandler(req, res) {
  const { limit, page, submittedPeerReviewId } = req.query;

  const user = await getServerUser(req, res);

  const peerSuggestions = await readPeerSuggestions({
    limit: limit ? parseInt(limit) : undefined,
    page: page ? parseInt(page) : undefined,
    submittedPeerReviewId,
    ability: await userAbility(user),
  });
  return res.status(200).json(peerSuggestions);
}
