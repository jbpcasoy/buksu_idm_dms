import userAbility from "@/services/abilities/defineAbility";
import readPeerSuggestionItem from "@/services/api/peer_suggestion_item/readPeerSuggestionItem";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getPeerSuggestionItemHandler(req, res) {
  const { id } = req.query;

  const user = await getServerUser(req, res);

  const peerSuggestionItem = await readPeerSuggestionItem({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(peerSuggestionItem);
}
