import userAbility from "@/services/abilities/defineAbility";
import deletePeerSuggestionItem from "@/services/api/peer_suggestion_item/deletePeerSuggestionItem";
import readPeerSuggestionItem from "@/services/api/peer_suggestion_item/readPeerSuggestionItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function deletePeerSuggestionItemHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);
  const peerSuggestionItem = await readPeerSuggestionItem({
    id,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const peerSuggestionItem = await deletePeerSuggestionItem(id);
      return res.status(200).json(peerSuggestionItem);
    },
    action: "delete",
    subject: subject("PeerSuggestionItem", peerSuggestionItem),
    fields: undefined,
    type: "PeerSuggestionItem",
  });
}
