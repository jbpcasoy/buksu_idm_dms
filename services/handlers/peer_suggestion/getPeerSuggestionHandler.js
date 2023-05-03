import userAbility from "@/services/abilities/defineAbility";
import readPeerSuggestion from "@/services/api/peer_suggestion/readPeerSuggestion";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getPeerSuggestionHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const peerSuggestion = await readPeerSuggestion({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(peerSuggestion);
}
