import userAbility from "@/services/abilities/defineAbility";
import createPeerSuggestion from "@/services/api/peer_suggestion/createPeerSuggestion";
import readSubmittedPeerReview from "@/services/api/submitted_peer_review/readSubmittedPeerReview";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postPeerSuggestionHandler(req, res) {
  const { submittedPeerReviewId } = req.body;

  const user = await getServerUser(req, res);
  const submittedPeerReview = await readSubmittedPeerReview({
    id: submittedPeerReviewId,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const peerSuggestion = await createPeerSuggestion({
        submittedPeerReviewId,
      });
      return res.status(201).json(peerSuggestion);
    },
    action: "connectToPeerSuggestion",
    subject: subject("SubmittedPeerReview", submittedPeerReview),
    fields: undefined,
    type: "SubmittedPeerReview",
  });
}
