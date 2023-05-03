import userAbility from "@/services/abilities/defineAbility";
import readPeerSuggestionItems from "@/services/api/peer_suggestion_item/readPeerSuggestionItems";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getPeerSuggestionItemsHandler(req, res) {
  const { limit, page, peerSuggestionId } = req.query;
  const user = await getServerUser(req, res);

  const peerSuggestionItems = await readPeerSuggestionItems({
    limit: limit ? parseInt(limit) : undefined,
    page: page ? parseInt(page) : undefined,
    peerSuggestionId,
    ability: await userAbility(user),
  });
  return res.status(200).json(peerSuggestionItems);
}
