import createChairpersonSuggestion from "@/services/api/chairperson_suggestion/createChairpersonSuggestion";

export default async function postChairpersonSuggestionHandler(req, res) {
  const { submittedChairpersonReviewId } = req.body;

  const chairpersonSuggestion = await createChairpersonSuggestion({
    submittedChairpersonReviewId,
  });
  return res.status(201).json(chairpersonSuggestion);
}
