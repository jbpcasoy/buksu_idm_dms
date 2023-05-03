import userAbility from "@/services/abilities/defineAbility";
import readPeerSuggestion from "@/services/api/peer_suggestion/readPeerSuggestion";
import createSubmittedPeerSuggestion from "@/services/api/submitted_peer_suggestion/createSubmittedPeerSuggestion";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postSubmittedPeerSuggestionHandler(req, res) {
  const { peerSuggestionId } = req.body;

  const user = await getServerUser(req, res);
  const peerSuggestion = await readPeerSuggestion({
    id: peerSuggestionId,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const submittedPeerSuggestion = await createSubmittedPeerSuggestion({
        peerSuggestionId,
        ability: await userAbility(user),
      });
      return res.status(201).json(submittedPeerSuggestion);
    },
    action: "connectToSubmittedPeerSuggestion",
    subject: subject("PeerSuggestion", peerSuggestion),
    fields: undefined,
    type: "PeerSuggestion",
  });
}
