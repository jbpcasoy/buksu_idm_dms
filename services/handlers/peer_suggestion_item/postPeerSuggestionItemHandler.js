import userAbility from "@/services/abilities/defineAbility";
import readPeerSuggestion from "@/services/api/peer_suggestion/readPeerSuggestion";
import createPeerSuggestionItem from "@/services/api/peer_suggestion_item/createPeerSuggestionItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postPeerSuggestionItemHandler(req, res) {
  const { peerSuggestionId, value, pageNumber, remarks } = req.body;

  const user = await getServerUser(req, res);
  const peerSuggestion = await readPeerSuggestion({
    id: peerSuggestionId,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const peerSuggestionItem = await createPeerSuggestionItem({
        peerSuggestionId,
        value,
        pageNumber,
        remarks,
      });

      return res.status(201).json(peerSuggestionItem);
    },
    action: "connectToPeerSuggestionItem",
    subject: subject("PeerSuggestion", peerSuggestion),
    fields: undefined,
    type: "PeerSuggestion",
  });
}
