import userAbility from "@/services/abilities/defineAbility";
import createChairpersonSuggestion from "@/services/api/chairperson_suggestion/createChairpersonSuggestion";
import readSubmittedChairpersonReview from "@/services/api/submitted_chairperson_review/readSubmittedChairpersonReview";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postChairpersonSuggestionHandler(req, res) {
  const { submittedChairpersonReviewId } = req.body;

  const user = await getServerUser(req, res);
  const submittedChairpersonReview = await readSubmittedChairpersonReview({
    id: submittedChairpersonReviewId,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const chairpersonSuggestion = await createChairpersonSuggestion({
        submittedChairpersonReviewId,
      });
      return res.status(201).json(chairpersonSuggestion);
    },
    action: "connectToChairpersonSuggestion",
    subject: subject("SubmittedChairpersonReview", submittedChairpersonReview),
    fields: undefined,
    type: "SubmittedChairpersonReview",
  });
}
