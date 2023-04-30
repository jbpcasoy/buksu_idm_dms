import userAbility from "@/services/abilities/defineAbility";
import deletePeerSuggestion from "@/services/api/peer_suggestion/deletePeerSuggestion";
import readPeerSuggestion from "@/services/api/peer_suggestion/readPeerSuggestion";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deletePeerSuggestionHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  async function findSubject({ id }) {
    const subject = await readPeerSuggestion({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const peerSuggestion = await deletePeerSuggestion(id);

      return res.status(200).json(peerSuggestion);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "PeerSuggestion",
  });
}
