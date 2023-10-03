import userAbility from "@/services/abilities/defineAbility";
import deleteSubmittedPeerSuggestion from "@/services/api/submitted_peer_suggestion/deleteSubmittedPeerSuggestion";
import readSubmittedPeerSuggestion from "@/services/api/submitted_peer_suggestion/readSubmittedPeerSuggestion";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteSubmittedPeerSuggestionHandler(req, res) {
  const { id } = req.query;

  const user = await getServerUser(req, res);

  async function findSubject({ id }) {
    const subject = await readSubmittedPeerSuggestion({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const submittedPeerSuggestion = await deleteSubmittedPeerSuggestion(id);
      return res.status(200).json(submittedPeerSuggestion);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "SubmittedPeerSuggestion",
  });
}
